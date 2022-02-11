import request from "../get-correct-answers";
import { Request, Response } from "express";
import * as mysql from "../../../utils/mysql";
import { RowDataPacket } from "mysql2/promise";
import { ALL_MANAGERS_TYPE, ALL_TEAMS_TYPE } from "../../../constants";

const mockRequest = {
  params: {
    questionId: 1,
  },
} as unknown as Request;

const mockResponse = {
  json: jest.fn(),
} as unknown as Response;

describe("Get correct answers post request", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Returns a successful result when a normal question type", async () => {
    const question = {
      answer_amount: 1,
      answer_set_answers_id: null,
      answer_set_id: null,
      answer_type: "yesno",
      correct_answer: "yes",
      points: 100,
      question: "Yes or no",
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementation(() => Promise.resolve([question as RowDataPacket]));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      question: [question],
      setAnswers: [],
    });
  });

  it("Returns a successful result with an all teams type question", async () => {
    const question = {
      answer_amount: 1,
      answer_set_answers_id: null,
      answer_set_id: ALL_TEAMS_TYPE,
      answer_type: null,
      correct_answer: null,
      points: 100,
      question: "Name a team",
    };

    const setAnswers = {
      answer: "Arsenal",
      id: 1,
      set_id: ALL_TEAMS_TYPE,
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementationOnce(() =>
        Promise.resolve([question as RowDataPacket])
      )
      .mockImplementationOnce(() =>
        Promise.resolve([setAnswers as RowDataPacket])
      );

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      question: [question],
      setAnswers: [setAnswers],
    });
  });

  it("Returns a successful result with an all mangers type question", async () => {
    const question = {
      answer_amount: 1,
      answer_set_answers_id: null,
      answer_set_id: ALL_MANAGERS_TYPE,
      answer_type: null,
      correct_answer: null,
      points: 100,
      question: "Name a team",
    };

    const setAnswers = {
      answer: "Luke Shaw",
      id: 1,
      set_id: ALL_MANAGERS_TYPE,
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementationOnce(() =>
        Promise.resolve([question as RowDataPacket])
      )
      .mockImplementationOnce(() =>
        Promise.resolve([setAnswers as RowDataPacket])
      );

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      question: [question],
      setAnswers: [setAnswers],
    });
  });

  it("Returns an unsuccessful result when the question query fails", async () => {
    jest.spyOn(mysql, "query").mockImplementation(() => Promise.resolve(false));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({ success: false });
  });

  it("Returns an unsuccessful result when the answer set query fails", async () => {
    const question = {
      answer_amount: 1,
      answer_set_answers_id: null,
      answer_set_id: ALL_MANAGERS_TYPE,
      answer_type: null,
      correct_answer: null,
      points: 100,
      question: "Name a team",
    };

    jest
      .spyOn(mysql, "query")
      .mockImplementationOnce(() =>
        Promise.resolve([question as RowDataPacket])
      )
      .mockImplementationOnce(() => Promise.resolve(false));

    await request(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith({ success: false });
  });
});
