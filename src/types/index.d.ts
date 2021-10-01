import { RowDataPacket } from "mysql2";

export interface Config {
  session: {
    secret: string;
  };
  passwords: {
    salt: string;
    pepper: string;
  };
  redis: {
    host: string;
    port: number;
    password: string;
  };
  mysql: MySQLConfig;
  ssl: {
    key: string;
    cert: string;
  };
}

export interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

declare module "express-session" {
  interface SessionData {
    loggedIn?: boolean;
    userId?: number;
    displayName?: string;
    isAdmin?: boolean;
  }
}

export interface AnswerSet {
  id: number;
  name: string;
}

export interface Question {
  id: number;
  answer_set_id: null | number;
  answer_type: string;
  correct_answer: null | string;
  correct_answer_set_id: null | number;
  date_added: string;
  deadline: string;
  league_id: number;
  points: number;
  question: string;
  name?: string;
  answer_amount: number;
}

export interface MySQLCorrectAnswer {
  answer_amount: number;
  answer_set_answers_id: null | number;
  answer_set_id: null | number;
  answer_type: string;
  correct_answer: null | string;
  points: number;
  question: string;
}

export interface ActiveQuestion {
  id: number;
  answer_amount: number;
  answer_set_id: number;
  answer_type: null | string;
  deadline: string;
  points: number;
  question: string;
  user_answer: string;
  added_points: null | number;
}

export interface ActiveAnswer {
  set_id: number;
  name: string;
  answer: string;
  correct: boolean;
}

export interface Dictionary<T> {
  [key: string]: T;
}

export interface CorrectAnswer {
  [key: string]: {
    correctAnswer: string;
  }[];
}

interface QuestionAnswerSet extends RowDataPacket {
  id: number;
  question: string;
  answer_type: string;
  answer_set_id: number;
  deadline: string;
  points: number;
  name: string;
  answer_amount: number;
}

export interface MySQLUser extends RowDataPacket {
  id: number;
  display_name: string;
  is_admin: boolean;
  confirmed: boolean;
  paid: boolean;
  email: string;
  username: string;
}

export interface MySQLCount extends RowDataPacket {
  count: nunmner;
}

export interface MySQLSetAnswer extends RowDataPacket {
  id: number;
  answer: string;
  set_id: number;
}

export interface MySQLAnswer extends RowDataPacket {
  id: number;
  answer: string;
  question_id: number;
  user_id: number;
  date_added: string;
}

export interface MySQLStanding extends RowDataPacket {
  id: number;
  date_added: string;
  standings: string;
}
