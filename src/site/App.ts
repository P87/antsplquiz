import express from "express";
import helmet from "helmet";
import path from "path";
import redis from "redis";
import session from "express-session";
import RedisConnect from "connect-redis";
import routes from "./routes";
import config from "./utils/config";
import fs from "fs";
import https from "https";
import logger from "./utils/logger";

const RedisStore = RedisConnect(session);

const redisClient = redis.createClient(config.redis);

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(helmet());

app.use(express.static("src/site/public"));

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: config.session.secret,
    resave: false,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync(config.ssl.key),
      cert: fs.readFileSync(config.ssl.cert),
    },
    app
  );

  httpsServer.listen(443, () => {
    logger.info(`Listening at https://localhost`);
  });
} else {
  app.listen(port, () => {
    logger.info(`Listening at http://localhost:${port}`);
  });
}
