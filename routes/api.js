// Routing for API //

const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const geoip = require("geoip-lite");
const triviaData = require("../data/trivia_data.js"); // Trivia data
const difficultyData = require("../client/src/data/difficulty_data.js"); // Difficulty data
const QuizHandler = require("../controllers/quizHandler.js");
const ScoreHandler = require("../controllers/scoreHandler.js");

const easyTrivia = triviaData.filter(entry => entry.level === "easy");
const medTrivia = triviaData.filter(entry => entry.level === "med");
const hardTrivia = triviaData.filter(entry => entry.level === "hard");

//Handler for quiz generation
var quizHandler = new QuizHandler();
//Handler for scoring
var scoreHandler = new ScoreHandler();

/* GET new trivia test. */
router.get("/trivia", function(req, res, next) {
  try {
    //Get easy, medium, and hard questions set by difficultyData
    const easy = quizHandler.getQuestions(easyTrivia, difficultyData.easy);
    const med = quizHandler.getQuestions(medTrivia, difficultyData.med);
    const hard = quizHandler.getQuestions(hardTrivia, difficultyData.hard);

    //Combine into one array
    const rawQuiz = [...easy, ...med, ...hard];

    //Make client-format quiz data
    const quiz = quizHandler.makeQuiz(rawQuiz);

    res.json(quiz);
  } catch (err) {
    next(err);
  }
});

/* POST score to DB, get scoring data to send back */
router.post("/score", function(req, res, next) {
  try {
    const score = req.body.score;

    //Get congrats message
    const congrats = scoreHandler.getCongrats(score);

    const gif = scoreHandler.getGif(score);

    //Run async DB operations and respond with congrats message, gif, and ranking to client
    dbOps(score, congrats, gif);
  } catch (err) {
    next(err);
  }

  //Add score and update/add ip to DB, aggregate scores and calculate score percentile
  async function dbOps(score, congrats, gif) {
    MongoClient.connect(
      process.env.DB,
      { useNewUrlParser: true },
      async function(err, client) {
        //Error
        if (err) {
          next(err);
        }
        //Connection
        else {
          const db = client.db("trivia-actually"); // Database
          const scoreCollection = db.collection("scores"); // Scores collection
          const ipCollection = db.collection("ips"); // IPs collection

          let ip;
          let headers = req.headers;
          let testing = false;

          //If in dev, set fake Ip and testing status to true
          if (process.env.NODE_ENV === "development") {
            ip = "38.128.128.90";
            testing = true;
          }
          //If in production, get real ip
          else {
            if (headers.hasOwnProperty("x-forwarded-for")) {
              const ipArray = headers["x-forwarded-for"].split(",");
              ip = ipArray[0];
            } else ip = null;
          }

          console.log(ip, headers);

          //Look up ip geo info
          let geo;
          if (ip != null) {
            geo = geoip.lookup(ip);
          }

          //Post score to scores collection
          let scorePosted = await scoreHandler
            .postScore(score, ip, geo, testing, scoreCollection)
            .catch(err => {
              next(err);
            });

          //Post score/ip to ips collection
          if (scorePosted) {
            let ipPosted = await scoreHandler
              .postIp(score, ip, geo, testing, ipCollection)
              .catch(err => {
                next(err);
              });

            //Aggregate scores and calculate percentile ranking
            if (ipPosted) {
              let percentileNum = await scoreHandler
                .getPercentile(score, testing, scoreCollection)
                .catch(err => {
                  next(err);
                });
              //Get string with ordinal
              let percentile = scoreHandler.getOrdinal(percentileNum);

              //Send back JSON
              try {
                //console.log({ score: score, congrats: congrats, gif: gif, percentile: percentile });
                res.json({ score: score, congrats: congrats, gif: gif, percentile: percentile });
              } catch (err) {
                next(err);
              }
            }
          }

          client.close();
        } // end of else for successful connection
      } // end of connection function
    ); // end of MongoClient.connect
  }
});

module.exports = router;
