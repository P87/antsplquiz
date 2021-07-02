import login from "../login";
import { Request, Response } from "express";
import * as mysql from "../../utils/mysql";
import { RowDataPacket } from "mysql2/promise";

describe("Login route", () => {
  it("renders with an all fields required error if no details passed", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      body: {},
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "All fields are required",
      csrfToken: "123",
    });
  });

  it("renders with an all fields required error if password not passed", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "All fields are required",
      csrfToken: "123",
      username: "test",
    });
  });

  it("renders with an all fields required error if username not passed", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      body: {
        password: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "All fields are required",
      csrfToken: "123",
      password: "test",
    });
  });

  it("renders a generic error if the MySQL query fails", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
        password: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest.spyOn(mysql, "query").mockImplementation(() => Promise.resolve(false));

    await login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "Error processing login. Please try again.",
      csrfToken: "123",
      username: "test",
      password: "test",
    });
  });

  it("renders an error if 0 users found", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
        password: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest.spyOn(mysql, "query").mockImplementation(() => Promise.resolve([]));

    await login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "Username and/or password not recognised",
      csrfToken: "123",
      username: "test",
      password: "test",
    });
  });

  test.each(["id", "display_name"])(
    "renders an error if no %p found",
    async (field) => {
      const mockRequest = {
        session: {
          loggedIn: true,
          isAdmin: false,
        },
        csrfToken: () => "123",
        body: {
          username: "test",
          password: "test",
        },
      } as Request;

      const mockResponse = {
        render: jest.fn(),
      } as unknown as Response;

      const mySQLResponse: { [key: string]: string | number } = {
        id: 1,
        display_name: "test",
      };

      delete mySQLResponse[field];

      jest
        .spyOn(mysql, "query")
        .mockImplementation(() =>
          Promise.resolve([mySQLResponse] as RowDataPacket[])
        );

      await login(mockRequest, mockResponse);

      expect(mockResponse.render).toHaveBeenCalledWith("login", {
        errorMessage: "Username and/or password not recognised",
        csrfToken: "123",
        username: "test",
        password: "test",
      });
    }
  );

  it("renders a waiting for confirmation error", async () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
        password: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() =>
        Promise.resolve([
          { id: 1, display_name: "test", confirmed: false },
        ] as RowDataPacket[])
      );

    await login(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage:
        "Still waiting for Ant to confirm your account before you can login",
      csrfToken: "123",
      username: "test",
      password: "test",
    });
  });

  it("sets up the session and redirects on success", async () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
        password: "test",
      },
    } as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() =>
        Promise.resolve([
          { id: 1, display_name: "test", confirmed: true, is_admin: false },
        ] as RowDataPacket[])
      );

    await login(mockRequest, mockResponse);

    expect(mockResponse.redirect).toHaveBeenCalledWith("/");
    expect(mockRequest.session).toEqual({
      loggedIn: true,
      userId: 1,
      displayName: "test",
      isAdmin: false,
    });
  });

  it("renders an error if mysql throws", async () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
      },
      csrfToken: () => "123",
      body: {
        username: "test",
        password: "test",
      },
    } as Request;

    const mockResponse = {
      render: jest.fn(),
      redirect: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(
        () => Promise.reject("There was an error") as Promise<RowDataPacket[]>
      );

    await login(mockRequest, mockResponse);

    expect(mockResponse.redirect).not.toHaveBeenCalled();
    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      errorMessage: "Something went wrong, please try again",
      csrfToken: "123",
      username: "test",
      password: "test",
    });
    expect(mockRequest.session).toEqual({
      loggedIn: false,
      userId: undefined,
      displayName: undefined,
      isAdmin: undefined,
    });
  });
});
