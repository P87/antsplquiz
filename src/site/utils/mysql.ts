import mysql2, {
  FieldPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import config from "../utils/config";

const pool = mysql2.createPool(config.mysql);
pool.on("connection", (connection) => {
  console.log("[MySQL] Pool connection created", connection.threadId);
});

export const query = async <T extends RowDataPacket>(
  query: string,
  params: (string | number)[]
) => {
  try {
    const [rows]: [T[], FieldPacket[]] = await pool.query<T[]>(query, params);
    return rows;
  } catch (err) {
    console.error("[MySQL] Error with query", err);
    return false;
  }
};

export const insertOne = async (query: string, params: (string | number)[]) => {
  try {
    const [rows] = await pool.query<ResultSetHeader>(query, params);
    return rows.affectedRows === 1;
  } catch (err) {
    console.error("[MySQL] Error with insertOne query", err);
    return false;
  }
};

export const convertDate = (date: Date): string => {
  const [month, day, year, hour, minutes, seconds] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  return `${year}-${month + 1}-${day} ${hour}:${minutes}:${seconds}`;
};
