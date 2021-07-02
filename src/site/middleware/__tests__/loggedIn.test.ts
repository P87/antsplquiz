import loggedIn from "../loggedIn";
import { Request, Response } from "express";

describe("Logged in middleware", () => {
  it("calls the next function if logged in", () => {
    const mockRequest = {
      session: {
        loggedIn: true,
      },
    } as unknown as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    const mockNextFunction = jest.fn();

    loggedIn(mockRequest, mockResponse, mockNextFunction);

    expect(mockResponse.redirect).not.toHaveBeenCalled();
    expect(mockNextFunction).toHaveBeenCalled();
  });

  it("redirects to the home page if not logged in", () => {
    const mockRequest = {
      session: {
        loggedIn: false,
      },
    } as unknown as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    const mockNextFunction = jest.fn();

    loggedIn(mockRequest, mockResponse, mockNextFunction);

    expect(mockResponse.redirect).toHaveBeenCalledWith("/");
    expect(mockNextFunction).not.toHaveBeenCalled();
  });
});
