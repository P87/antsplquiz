import homeRoute from "../home";
import { Request, Response } from "express";

describe("Home route", () => {
  it("renders the home view if logged in", () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
        displayName: "Ant",
      },
      query: [],
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    homeRoute(mockRequest, mockResponse);
    expect(mockResponse.render).toHaveBeenCalledWith("home", {
      display_name: "Ant",
      isAdmin: false,
    });
  });

  it("renders the login view if not logged in", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      query: [],
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    homeRoute(mockRequest, mockResponse);
    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      csrfToken: "123",
    });
  });

  it("renders the login view with a registration success message", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
      csrfToken: () => "123",
      query: {
        "register-success": 1,
      },
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    homeRoute(mockRequest, mockResponse);
    expect(mockResponse.render).toHaveBeenCalledWith("login", {
      csrfToken: "123",
      successfulRegistration: true,
    });
  });
});
