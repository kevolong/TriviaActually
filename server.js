const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const helmet = require("helmet");
const geoip = require("geoip-lite");
const round = require("mongo-round");
require("dotenv").config();

//var testRouter = require("./routes/test");
var apiRouter = require("./routes/api");
var adminRouter = require("./routes/admin");

//Error status code data
const errorData = require("./data/error_data.js");

var app = express();

// view engine setup
app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//Use default Helmet security: dnsPrefetchControl, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff, xssFilter
app.use(helmet());

//Public route dev
app.use(express.static(path.join(__dirname, "public")));

//Client routing
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("/", function(req, res, next) {
    //res.sendFile(path.join(__dirname, "client/build", "index.html"));
    res.sendFile(
      "https://storage.cloud.google.com/proud-processor-224517.appspot.com/static/index.html"
    );
  });
}

app.use("/api", apiRouter);
app.use("/admin", adminRouter);
//app.use("/test", testRouter);

//404 Error Middleware
app.use(function(req, res, next) {
  res.status(404);
  res.render("error", {
    image: "images/titles/trivia_actually_404.png",
    alt: "404error",
    title: "Not Found",
    message: "The page you're looking for does not exist, has been removed, or Kevin cocked up."
  });
});

//Error Handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error(err);

  //400 Bad Request Error
  if (err.status === 400) {
    res.status(400);
    res.render("error", {
      image: "images/titles/trivia_actually_400.png",
      alt: "400error",
      title: "Bad Request",
      message: err
    });
  }

  //500 Internal Server Error
  else if (err.status === 500) {
    res.status(500);
    res.render("error", {
      image: "images/titles/trivia_actually_500.png",
      alt: "500error",
      title: "Internal Server Error",
      message: "Heathrow security wouldn't let us say goodbye to the love our life!"
    });
  }

  //Other error
  else {
    // Has error status in error data
    if (errorData.hasOwnProperty(err.status)) {
      res.status(err.status);
      res.render("error", {
        image: "images/titles/trivia_actually_general_error.png",
        alt: "OopsError",
        title: err.status + " Error",
        message: errorData[err.status]
      });
    }
    // Otherwise give 500 error
    else {
      res.status(500);
      res.render("error", {
        image: "images/titles/trivia_actually_500.png",
        alt: "500error",
        title: "Internal Server Error",
        message: "Heathrow security wouldn't let us say goodbye to the love our life!"
      });
    }
  }
});

module.exports = app;
