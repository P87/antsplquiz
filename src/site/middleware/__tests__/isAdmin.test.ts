import isAdmin from "../isAdmin";
import { Request, Response, NextFunction } from "express";

describe("isAdmin middleware", () => {
  it("redirects to home page if logged in and not an admin", () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
      },
    } as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    const mockNextFunction = jest.fn() as NextFunction;

    isAdmin(mockRequest, mockResponse, mockNextFunction);

    expect(mockResponse.redirect).toHaveBeenCalledWith("/");
  });

  it("redirects to home page if not logged in", () => {
    const mockRequest = {
      session: {
        session: {
          loggedIn: false,
        },
      },
    } as unknown as Request;

    const mockNextFunction = jest.fn() as NextFunction;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    isAdmin(mockRequest, mockResponse, mockNextFunction);

    expect(mockResponse.redirect).toHaveBeenCalledWith("/");
  });

  it("calls the next function if logged in and an admin", () => {
    const mockRequest = {
      session: { loggedIn: true, isAdmin: true },
    } as Request;

    const mockNextFunction = jest.fn() as NextFunction;

    isAdmin(mockRequest, {} as Response, mockNextFunction);

    expect(mockNextFunction).toHaveBeenCalled();
  });
});
