/**
 * Handler for admin stats
 */

const round = require("mongo-round");

function statsHandler() {
  /** Get median number from an array
   *
   *      @param {array} array  -  sorted array
   *      RETURN
   *          @param {number} median  - median number
   */
  function getMedian(array) {
    let median;

    //Odd Number
    if (array.length % 2 != 0) {
      let index = Math.floor(array.length / 2);
      median = array[index];
    }
    //Even number
    else {
      let index1 = array.length / 2;
      let index2 = array.length / 2 - 1;
      let num1 = array[index1];
      let num2 = array[index2];
      median = (num1 + num2) / 2;
    }

    return median;
  }

  //Run getMedian for testing
  this.runGetMedian = function(array) {
    return getMedian(array);
  };

  /** Aggregate scores data to get count of all scores, average, median, and count of each score
   *      @param {boolean} testing  -  true if in development testing, false if in production
   *      @param {const} collection  -  MondgoDB collection
   *
   *      RETURN
   *          reject with err
   *          resolve with {
   *            totalCount: Total number of score
   *            average: Average score
   *            median: Median score
   *            zeroCount: Number of 0s
   *            tenCount: Number of 10s
   *            twentyCount: Number of 20s
   *            thirtyCount: Number of 30s
   *            fortyCount: Number of 40s
   *            fiftyCount: Number of 50s
   *            sixtyCount: Number of 60s
   *            seventyCount: Number of 70s
   *            eightyCount: Number of 80s
   *            ninetyCount: Number of 90s
   *            hundredCount: Number of 100s
   *          }
   */
  this.getScores = function(testing, collection) {
    return new Promise((resolve, reject) => {
      //Aggregate data
      collection
        .aggregate([
          //Filter out testing status
          { $match: { test: testing } },
          { $sort: { score: 1 } },
          //Sum total number of scores, number of scores at each score...
          {
            $group: {
              _id: null,
              totalCount: { $sum: 1 },
              average: { $avg: "$score" },
              allScores: { $push: "$score" },
              zeroCount: { $sum: { $cond: [{ $eq: ["$score", 0] }, 1, 0] } },
              tenCount: { $sum: { $cond: [{ $eq: ["$score", 10] }, 1, 0] } },
              twentyCount: { $sum: { $cond: [{ $eq: ["$score", 20] }, 1, 0] } },
              thirtyCount: { $sum: { $cond: [{ $eq: ["$score", 30] }, 1, 0] } },
              fortyCount: { $sum: { $cond: [{ $eq: ["$score", 40] }, 1, 0] } },
              fiftyCount: { $sum: { $cond: [{ $eq: ["$score", 50] }, 1, 0] } },
              sixtyCount: { $sum: { $cond: [{ $eq: ["$score", 60] }, 1, 0] } },
              seventyCount: { $sum: { $cond: [{ $eq: ["$score", 70] }, 1, 0] } },
              eightyCount: { $sum: { $cond: [{ $eq: ["$score", 80] }, 1, 0] } },
              ninetyCount: { $sum: { $cond: [{ $eq: ["$score", 90] }, 1, 0] } },
              hundredCount: { $sum: { $cond: [{ $eq: ["$score", 100] }, 1, 0] } }
            }
          },
          //Project all fields and use mongo-round to round average to integer
          {
            $project: {
              _id: 0,
              allScores: true,
              totalCount: true,
              average: round("$average", 0),
              zeroCount: true,
              tenCount: true,
              twentyCount: true,
              thirtyCount: true,
              fortyCount: true,
              fiftyCount: true,
              sixtyCount: true,
              seventyCount: true,
              eightyCount: true,
              ninetyCount: true,
              hundredCount: true
            }
          }
        ])
        //Convert to array
        .toArray(function(err, result) {
          if (err) {
            reject(err);
          }
          //Respond with data
          else {
            let allScores = [...result[0].allScores];
            let median = getMedian(allScores);

            resolve({
              totalCount: result[0].totalCount,
              average: result[0].average,
              median: median,
              zeroCount: result[0].zeroCount,
              tenCount: result[0].tenCount,
              twentyCount: result[0].twentyCount,
              thirtyCount: result[0].thirtyCount,
              fortyCount: result[0].fortyCount,
              fiftyCount: result[0].fiftyCount,
              sixtyCount: result[0].sixtyCount,
              seventyCount: result[0].seventyCount,
              eightyCount: result[0].eightyCount,
              ninetyCount: result[0].ninetyCount,
              hundredCount: result[0].hundredCount
            });
          } // end of else
        }); // end of aggregate
    }); // end of Promise
  }; // end of function getScores

  /** Get count of IPs and location details
   *      @param {boolean} testing  -  true if in development testing, false if in production
   *      @param {const} collection  -  MondgoDB collection
   *
   *      RETURN
   *          reject with err
   *          resolve with {
   *            ipCount: Total count of unique IPs
   *            locations: Array of objects with city, region, country
   *          }
   */
  this.getIps = function(testing, collection) {
    return new Promise((resolve, reject) => {
      collection
        .aggregate([
          //Filter out testing status
          { $match: { test: testing } },
          //Count IPs and push location details object to array
          {
            $group: {
              _id: null,
              ipCount: { $sum: 1 },
              locations: {
                $push: {
                  city: "$ipInfo.city",
                  region: "$ipInfo.region",
                  country: "$ipInfo.country"
                }
              }
            }
          },
          //Project all fields and use mongo-round to round average to integer
          {
            $project: {
              _id: 0,
              ipCount: true,
              locations: true
            }
          }
        ])
        //Convert to array
        .toArray(function(err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        });
    }); // end of Promise
  }; // end of function getIps

  /** Reduce locations arry to unique values
   *      @param {array} locations  -  object with city, region, and country
   *
   *      RETURN
   *          reject with err
   *          resolve with array of location objects
   */
  this.reduceLocations = function(locations) {
    return new Promise((resolve, reject) => {
      try {
        let reducedLocations = [];
        locations.forEach(location => {
          //Turn location object into string
          locString = location.city + ", " + location.region + " (" + location.country + ")";
          //Push if not in array already
          if (reducedLocations.indexOf(locString) === -1) {
            reducedLocations.push(locString);
          }
        });
        resolve(reducedLocations);
      } catch (err) {
        reject(err);
      }
    });
  };
}

module.exports = statsHandler;
