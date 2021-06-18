import { MySQLConfig } from "../../types";
import mysql from "mysql";

export default class MySQL {
  private connection: mysql.Connection;

  constructor(config: MySQLConfig) {
    this.connection = this.connect(config);
  }

  public select(query: string, params: string[]): Promise<any[]> {
    return this.query(query, params);
  }

  public async insertOne(query: string, params: string[]): Promise<boolean> {
    const result = await this.query(query, params);
    return result.affectedRows === 1;
  }

  public query(query: string, params: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(query, params, (err, results) => {
        if (err) {
          // @todo log params too but filter out stuff we woudln't want logging like passwords etc.
          console.log(`[MySQL] Error querying database with query ${query}`);
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  private connect(config: MySQLConfig): mysql.Connection {
    const connection = mysql.createConnection(config);
    console.log(`[MySQL] Connecting to ${config.host}`);

    connection.connect((err) => {
      if (err) {
        console.error("[MySQL] Error connecting: ", err.stack);
        throw new Error("Error connecting to database");
      }

      console.log("[MySQL] Connected as id ", connection.threadId);
    });

    return connection;
  }

  public end() {
    console.log("[MySQL] Closing connection " + this.connection.threadId);
    this.connection.end();
  }
}
