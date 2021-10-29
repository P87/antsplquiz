import request from "../answer";
import { Request, Response } from "express";

describe("Answer get request", () => {
  it("Renders the answer view", async () => {
    const renderMock = jest.fn();
    await request(
      { session: { isAdmin: false } } as Request,
      { render: renderMock } as unknown as Response
    );
    expect(renderMock).toHaveBeenCalledWith("questions/answer", {
      isAdmin: false,
    });
  });
});
