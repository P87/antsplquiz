import request from "../active";
import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import { RowDataPacket } from "mysql2/promise";

const mockRequest = {
  session: {
    userId: 1,
  },
} as unknown as Request;

const mockResponse = {
  json: jest.fn(),
} as unknown as Response;

describe("active post route", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Responds with a question and no answers", async () => {
    const question = {
      id: 1,
      question: "This is a test question",
      answer: null,
      answer_amount: 1,
      answer_set_id: null,
      answer_type: "number",
      deadline: "2021-10-10T11:00:00.000Z",
      points: 10,
      user_answer: null,
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() => Promise.resolve([question as RowDataPacket]));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({
      questions: {
        [1]: question,
      },
      answers: {
        [1]: [],
      },
    });
  });

  it("Responds with a question and answers", async () => {
    const question = {
      id: 1,
      question: "This is a test question",
      answer: "Test Answer",
      answer_amount: 1,
      answer_set_id: null,
      answer_type: "number",
      deadline: "2021-10-10T11:00:00.000Z",
      points: 10,
      user_answer: null,
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() => Promise.resolve([question as RowDataPacket]));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({
      questions: {
        [1]: question,
      },
      answers: {
        [1]: [
          {
            set_id: null,
            name: null,
            answer: "Test Answer",
          },
        ],
      },
    });
  });

  it("Returns an error when mysql query returns false", async () => {
    jest.spyOn(mysql, "query").mockImplementation(() => Promise.resolve(false));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({ success: false });
  });
});
