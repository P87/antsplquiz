export interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

declare module "express-session" {
  interface SessionData {
    loggedIn?: boolean;
    user_id?: number;
    display_name?: string;
  }
}
