const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const triviaData = require("../data/trivia_data.js");
const StatsHandler = require("../controllers/statsHandler.js");

const easyTrivia = triviaData.filter(entry => entry.level === "easy");
const medTrivia = triviaData.filter(entry => entry.level === "med");
const hardTrivia = triviaData.filter(entry => entry.level === "hard");

//Handler for scoring
var statsHandler = new StatsHandler();

//Get login page for stats
router.get("/stats", function(req, res, next) {
  try {
    res.render("admin_login");
  } catch (err) {
    next(err);
  }
});

/** Post password. Send back stats
 * if request format json:
 *   triviaData: {Total count for each trivia category}
 *   scoreStats: {Total score count, average score, median score, and total count for each score value}
 *   ipStats: {Total unique IP count}
 * else
 *  {
 *    totalCount: Total number of score
 *    ipCount: Total number of unique IPs
 *    average: Average score
 *    median: Median score
 *    zeroCount: Number of 0s
 *    tenCount: Number of 10s
 *    twentyCount: Number of 20s
 *    thirtyCount: Number of 30s
 *    fortyCount: Number of 40s
 *    fiftyCount: Number of 50s
 *    sixtyCount: Number of 60s
 *    seventyCount: Number of 70s
 *    eightyCount: Number of 80s
 *    ninetyCount: Number of 90s
 *    hundredCount: Number of 100s
 *    easyCount: easyTrivia.length,
 *    medCount: medTrivia.length,
 *    hardCount: hardTrivia.length,
 *    totalTriviaCount: triviaData.length
 *  }
 */
router.post("/stats", function(req, res, next) {
  //Verify password
  if (req.body.password === process.env.ADMIN_PS) {
    dbOps();
  } else {
    let err = new Error("Incorrect Password");
    err.status = 400;
    next(err);
  }

  //Run DB aggregation for stats
  async function dbOps() {
    let testing = false;

    //If in dev, set fake Ip and testing status to true
    if (process.env.NODE_ENV === "development") {
      testing = true;
    }

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

          //Get score stats
          const scoreData = await statsHandler.getScores(testing, scoreCollection).catch(err => {
            next(err);
          });

          //Get ip Stats
          const ipData = await statsHandler.getIps(testing, ipCollection).catch(err => {
            next(err);
          });

          //Get unique locations
          const locations = await statsHandler.reduceLocations(ipData.locations).catch(err => {
            next(err);
          });

          //JSON request for testing
          if (req.body.format === "json") {
            try {
              res.json({
                triviaData: {
                  easyCount: easyTrivia.length,
                  medCount: medTrivia.length,
                  hardCount: hardTrivia.length,
                  totalTriviaCount: triviaData.length
                },
                scoreStats: scoreData,
                ipStats: { ipCount: ipData.ipCount, locations: locations }
              });
            } catch (err) {
              next(err);
            }
          } // end of if format json
          //Otherwise render Jade page
          else {
            try {
              res.render("admin_stats", {
                totalCount: scoreData.totalCount,
                ipCount: ipData.ipCount,
                average: scoreData.average,
                median: scoreData.median,
                zeroCount: scoreData.zeroCount,
                tenCount: scoreData.tenCount,
                twentyCount: scoreData.twentyCount,
                thirtyCount: scoreData.thirtyCount,
                fortyCount: scoreData.fortyCount,
                fiftyCount: scoreData.fiftyCount,
                sixtyCount: scoreData.sixtyCount,
                seventyCount: scoreData.seventyCount,
                eightyCount: scoreData.eightyCount,
                ninetyCount: scoreData.ninetyCount,
                hundredCount: scoreData.hundredCount,
                easyCount: easyTrivia.length,
                medCount: medTrivia.length,
                hardCount: hardTrivia.length,
                totalTriviaCount: triviaData.length,
                locations: locations
              });
            } catch (err) {
              next(err);
            }
          } // end of else render Jade

          client.close();
        } // end of else for successful connection
      } // end of connection function
    ); // end of MongoClient.connect
  }
});

module.exports = router;
