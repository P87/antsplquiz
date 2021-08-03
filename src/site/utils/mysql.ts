import mysql2, {
  FieldPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import config from "../utils/config";
import logger from "./logger";

const pool = mysql2.createPool(config.mysql);
pool.on("connection", (connection) => {
  logger.info(`[MySQL] Pool connection created ${connection.threadId}`);
});

export const query = async <T extends RowDataPacket>(
  query: string,
  params: (string | number)[]
) => {
  try {
    logger.info("[MySQL] Performing query", { query });
    const [rows]: [T[], FieldPacket[]] = await pool.query<T[]>(query, params);
    return rows;
  } catch (err) {
    logger.error("[MySQL] Error with query", err);
    return false;
  }
};

export const insertOne = async (query: string, params: (string | number)[]) => {
  try {
    logger.info("[MySQL] Performing insert", { query });
    const [rows] = await pool.query<ResultSetHeader>(query, params);
    return rows.affectedRows === 1;
  } catch (err) {
    logger.error("[MySQL] Error with insertOne query", { err });
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
