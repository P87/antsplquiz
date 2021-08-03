import winston, { createLogger, transports, format } from "winston";

const logger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "ants-pl-quiz" },
  transports: [
    new transports.File({ filename: "app-error.log", level: "error" }),
    new transports.File({ filename: "app-combined.log" }),
  ],
});

export default logger;
