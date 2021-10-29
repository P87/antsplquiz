import logout from "../logout";
import { Request, Response } from "express";

describe("Logout route", () => {
  it("destroys session", async () => {
    const mockRequest = {
      session: {
        loggedIn: true,
        isAdmin: false,
        displayName: "Ant",
        destroy: jest.fn(),
      },
      query: [],
    } as unknown as Request;

    const mockResponse = {
      redirect: jest.fn(),
    } as unknown as Response;

    await logout(mockRequest, mockResponse);

    expect(mockRequest.session.destroy).toHaveBeenCalled();
  });
});
