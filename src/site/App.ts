import express from "express";
import helmet from "helmet";
import path from "path";
import redis from "redis";
import session from "express-session";
import RedisConnect from "connect-redis";
import config from "../config.json";

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
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  const loggedin = false;
  loggedin ? res.render("home") : res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post('/register', (req, res) => {
  const { username, email, password, leagueCode } = req.body;
  console.log(req.body);

  if ([username, email, password, leagueCode].some(field => !field)) {
    return res.render('register', {errorMessage: 'All fields are required', ...req.body});
  }
  return res.render('register');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
