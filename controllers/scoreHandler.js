const scoreData = require("../data/scoring_data.js"); // Trivia data

function ScoreHandler() {
  //Get random integer between min and max
  this.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }; // end of function getRandomInt()

  /** Match score with congrats message
   *      @param {number} score  -  user score
   *      RETURN
   *          @param 'String' message  - congrats message
   */
  this.getCongrats = function(score) {
    let message = scoreData[score].message;
    return message;
  }; // end of function getCongrats()

  /** Match score with congrats gif chosen randomly
   *      @param {number} score  -  user score
   *      RETURN
   *          @param 'String' gif  - gif filename and path
   */
  this.getGif = function(score) {
    const gifDir = "./images/gifs/";
    let gif = scoreData[score].gifs[this.getRandomInt(0, scoreData[score].gifs.length - 1)];
    return gifDir + gif;
  }; // end of function getGif()

  /** Post score to scores collection
   *      @param {number} score  -  user score
   *      @param {string} ip  -  user ip
   *      @param {object} geo  -  user ip's geo info
   *      @param {boolean} testing  -  true if in development testing, false if in production
   *      @param {const} collection  -  MondgoDB collection
   *
   *      RETURN
   *          reject with err
   *          resolve with true
   */

  this.postScore = function(score, ip, geo, testing, collection) {
    return new Promise((resolve, reject) => {
      var newDoc = { score: score, test: testing, date: new Date(), ip: ip, ipInfo: geo };
      collection.insertOne(newDoc, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    }); // end of Promise
  }; // end of function postScore()

  /** Post Ip and score to ips collection
   *      @param {number} score  -  user score
   *      @param {string} ip  -  user ip
   *      @param {object} geo  -  user ip's geo info
   *      @param {boolean} testing  -  true if in development testing, false if in production
   *      @param {const} collection  -  MondgoDB collection
   *
   *      RETURN
   *          reject with err
   *          resolve with true
   */
  this.postIp = function(score, ip, geo, testing, collection) {
    return new Promise((resolve, reject) => {
      collection.updateOne(
        { ip: ip, test: testing },
        { $set: { ipInfo: geo }, $push: { scores: score } },
        { upsert: true },
        function(err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    }); // end of Promise
  }; // end of function postScore()

  /** Aggregate scores and calculate percentile ranking
   *      @param {number} score  -  user score
   *      @param {boolean} testing  -  true if in development testing, false if in production
   *      @param {const} collection  -  MondgoDB collection
   *
   *      RETURN
   *          reject with error
   *          resolve with percentile Number
   */
  this.getPercentile = function(score, testing, collection) {
    return new Promise((resolve, reject) => {
      collection
        .aggregate([
          //Filter out testing status
          { $match: { test: testing } },
          //Sum total number of scores and scores worse than users
          {
            $group: {
              _id: null,
              totalCount: { $sum: 1 },
              worseCount: { $sum: { $cond: [{ $lt: ["$score", score] }, 1, 0] } }
            }
          },
          //Project the total count, worse count, and calculate percentile ranking
          {
            $project: {
              _id: 0,
              totalCount: true,
              worseCount: true,
              //Divides the worse scores by total scores and multiplies result by 100
              percentile: {
                $multiply: [{ $divide: ["$worseCount", "$totalCount"] }, 100]
              }
            }
          }
        ])
        //Convert to array
        .toArray(function(err, result) {
          if (err) {
            reject(err);
          }
          //Round down to integer
          else {
            let percentile = Math.round(result[0].percentile);
            let rank;
            //No 100th percentile. Make 99
            if (percentile === 100) {
              rank = 99;
            } else {
              rank = percentile;
            }
            resolve(rank);
          }
        }); // end of aggregate
    }); // end of Promise
  }; // end of function getPercentile()

  /** Get ordinal for percentile ranking number
   *      @param {number} score  -  user score
   *
   *      RETURN
   *          string of number + ordinal
   */
  this.getOrdinal = function(number) {
    //Convert number to string
    let numString = number.toString();
    //Get last number in string and convert back to number
    let lastNumString = numString[numString.length - 1];
    let lastNum = Number(lastNumString);

    //Calculate ordinal
    let ordinal = "";
    if (lastNum === 0 || lastNum > 3) {
      ordinal = "th";
    } else if (lastNum === 1) {
      if (number === 11) {
        ordinal = "th";
      } else {
        ordinal = "st";
      }
    } else if (lastNum === 2) {
      if (number === 12) {
        ordinal = "th";
      } else {
        ordinal = "nd";
      }
    } else if (lastNum === 3) {
      if (number === 13) {
        ordinal = "th";
      } else {
        ordinal = "rd";
      }
    }

    return number + ordinal;
  }; // end of function getOrdinal()
} // end of ScoreHandler

module.exports = ScoreHandler;
