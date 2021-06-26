import { RowDataPacket } from "mysql2";

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
}

export interface MySQLUser extends RowDataPacket {
  id: number;
  display_name: string;
  is_admin: boolean;
}

export interface MySQLCount extends RowDataPacket {
  count: nunmner;
}
