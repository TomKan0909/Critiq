/* server.js for react-express-authentication */
"use strict";

/* Server environment setup */
// To run in development mode, run normally: node server.js
// To run in development with the test user logged in the backend, run: TEST_USER_ON=true node server.js
// To run in production mode, run in terminal: NODE_ENV=production node server.js
const env = process.env.NODE_ENV; // read the environment variable (will be 'production' in production mode)

const USE_TEST_USER = env !== "production" && process.env.TEST_USER_ON; // option to turn on the test user.
const TEST_USER_ID = "5fb8b011b864666580b4efe3"; // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file
const TEST_USER_EMAIL = "test@user.com";
//////

const log = console.log;
const path = require("path");

const express = require("express");
// starting the express server
const app = express();
app.use(express.json());

// enable CORS if in development, for React local development server to connect to the web server.
const cors = require("cors");
const corsOptions = {
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin:
    process.env.NODE_ENV === "production"
      ? "https://www.production.xyz"
      : "http://localhost:3000",
};
// if (env !== 'production') { app.use(cors(corsOptions))}
app.use(cors(corsOptions));

app.set("trust proxy", 1);
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set("useFindAndModify", false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { CritiqRoom } = require("./models/room");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)

// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require("connect-mongo"); // to store session information on the database in production

// const queue = require('express-queue');
// app.use(queue({ activeLimit: 1, queuedLimit: -1 }));

function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (env !== "production" && USE_TEST_USER) req.session.user = TEST_USER_ID; // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)

  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

/*** Session handling **************************************/
// Create a session and session cookie
app.use(
  session({
    key: "userID",
    secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 6000000,
      httpOnly: true,
    },
    // store the sessions on the database in production
    store:
      env === "production"
        ? MongoStore.create({
            mongoUrl:
              process.env.MONGODB_URI || "mongodb://localhost:27017/StudentAPI",
          })
        : null,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const usersRouter = require("./routes/users");
app.use(usersRouter);

const critiqRoomRouter = require("./routes/rooms");
app.use(critiqRoomRouter);

// other student API routes can go here...
// ...

/*** Webpage routes below **********************************/
//Serve the build
app.use(express.static(path.join(__dirname, "./frontend/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  // check for page routes that we expect in the frontend to provide correct status code.
  // const goodPageRoutes = ["/", "/login", "/dashboard"];
  // if (!goodPageRoutes.includes(req.url)) {
  //     // if url not in expected page routes, set status to 404.
  //     res.status(404);
  // }

  // send index.html
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
