import landing from "../landing";
import { Request, Response } from "express";

describe("Register landing route", () => {
  it("renders the register view", () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
        displayName: "Ant",
      },
      csrfToken: () => "123",
    } as unknown as Request;

    const mockResponse = {
      render: jest.fn(),
    } as unknown as Response;

    landing(mockRequest, mockResponse);

    expect(mockResponse.render).toHaveBeenCalledWith("register", {
      csrfToken: "123",
    });
  });
});
