import express from "express";
import helmet from "helmet";
import path from "path";
import redis from "redis";
import session from "express-session";
import RedisConnect from "connect-redis";
import config from "../config.json";
import routes from "./routes";

const RedisStore = RedisConnect(session);

declare module "express-session" {
  interface SessionData {
    views?: number;
  }
}

// @todo change this to just config.redis?
const redisClient = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

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
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
