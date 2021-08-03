import request from "../request";
import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import { RowDataPacket } from "mysql2/promise";

let requestBody: { [key: string]: string | number };

describe("Registration post route", () => {
  beforeEach(() => {
    requestBody = {
      username: "test",
      display_name: "test",
      email: "test@test.test",
      password: "test",
      confirm_password: "test",
      leagueCode: 1,
      csrfToken: "123",
    };
  });
  test.each([
    "username",
    "display_name",
    "email",
    "password",
    "confirm_password",
  ])("renders an error message if %p is not passed", (field) => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    delete mockRequest.body[field];

    request(mockRequest, mockResponse);
    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      errorMessage: "All fields are required",
      ...mockRequest.body,
    });
  });

  it("renders a generic error if the query to find existing users fails", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest.spyOn(mysql, "query").mockImplementation(() => Promise.resolve(false));

    await request(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      errorMessage:
        "There was an error processing your request, please try again.",
      ...requestBody,
      csrfToken: "123",
    });
  });

  it("renders an error if details already exist", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() =>
        Promise.resolve([{ count: 1 }] as RowDataPacket[])
      );

    await request(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      errorMessage:
        "Some/all user details already registered. If you have not already registered maybe your username or display name are already taken.",
      ...requestBody,
      csrfToken: "123",
    });
  });

  it("renders an error if the mysql query throws", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(
        () => Promise.reject("There was an error") as Promise<RowDataPacket[]>
      );

    await request(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      errorMessage:
        "An error occurred processing your request. Please try again.",
      ...requestBody,
      csrfToken: "123",
    });
  });

  it("redirects if MySQL insert is successful", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() =>
        Promise.resolve([{ count: 0 }] as RowDataPacket[])
      );
    jest
      .spyOn(mysql, "insertOne")
      .mockImplementation(() => Promise.resolve(true));

    await request(mockRequest, mockResponse);

    expect(mockResponse.redirect).toHaveBeenCalledWith("/?register-success=1");
  });

  it("renders an error if the mysql insert fails", async () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      body: requestBody,
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() =>
        Promise.resolve([{ count: 0 }] as RowDataPacket[])
      );
    jest
      .spyOn(mysql, "insertOne")
      .mockImplementation(() => Promise.resolve(false));

    await request(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      errorMessage:
        "Something went wrong creating your account. Please try again.",
      ...requestBody,
      csrfToken: "123",
    });
  });
});
