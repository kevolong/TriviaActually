const chai = require("chai");
const assert = chai.assert;
const ScoreHandler = require("../controllers/scoreHandler.js");
const StatsHandler = require("../controllers/statsHandler.js");

var scoreHandler = new ScoreHandler();
var statsHandler = new StatsHandler();

//Unit Tests
suite("Unit Tests", function() {
  //Test numerical input
  suite("Function scoreHandler.getOrdinal(input)", function() {
    test("0 place", function(done) {
      var input = 90;
      assert.equal(scoreHandler.getOrdinal(input), "90th");
      done();
    });

    test("1 place", function(done) {
      var input = 21;
      assert.equal(scoreHandler.getOrdinal(input), "21st");
      done();
    });

    test("11", function(done) {
      var input = 11;
      assert.equal(scoreHandler.getOrdinal(input), "11th");
      done();
    });

    test("1", function(done) {
      var input = 1;
      assert.equal(scoreHandler.getOrdinal(input), "1st");
      done();
    });

    test("2 place", function(done) {
      var input = 42;
      assert.equal(scoreHandler.getOrdinal(input), "42nd");
      done();
    });

    test("2", function(done) {
      var input = 2;
      assert.equal(scoreHandler.getOrdinal(input), "2nd");
      done();
    });

    test("12", function(done) {
      var input = 12;
      assert.equal(scoreHandler.getOrdinal(input), "12th");
      done();
    });

    test("3 place", function(done) {
      var input = 93;
      assert.equal(scoreHandler.getOrdinal(input), "93rd");
      done();
    });

    test("3", function(done) {
      var input = 3;
      assert.equal(scoreHandler.getOrdinal(input), "3rd");
      done();
    });

    test("13", function(done) {
      var input = 13;
      assert.equal(scoreHandler.getOrdinal(input), "13th");
      done();
    });

    test("4 place", function(done) {
      var input = 44;
      assert.equal(scoreHandler.getOrdinal(input), "44th");
      done();
    });

    test("5 place", function(done) {
      var input = 85;
      assert.equal(scoreHandler.getOrdinal(input), "85th");
      done();
    });

    test("6 place", function(done) {
      var input = 36;
      assert.equal(scoreHandler.getOrdinal(input), "36th");
      done();
    });

    test("7 place", function(done) {
      var input = 77;
      assert.equal(scoreHandler.getOrdinal(input), "77th");
      done();
    });

    test("8 place", function(done) {
      var input = 68;
      assert.equal(scoreHandler.getOrdinal(input), "68th");
      done();
    });

    test("9 place", function(done) {
      var input = 99;
      assert.equal(scoreHandler.getOrdinal(input), "99th");
      done();
    });
  }); // end of sub-suite scoreHandler.getOrdinal()

  //Test median
  suite("Function statsHandler.getMedian(array)", function() {
    test("2.7,  3.5,  5.1,  8.3", function(done) {
      var array = [2.7, 3.5, 5.1, 8.3];
      assert.equal(statsHandler.runGetMedian(array), 4.3);
      done();
    });
    test("0, 11, 13, 15, 16, 23, 26", function(done) {
      var array = [0, 11, 13, 15, 16, 23, 26];
      assert.equal(statsHandler.runGetMedian(array), 15);
      done();
    });
    test("3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 39, 40, 56", function(done) {
      var array = [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 39, 40, 56];
      assert.equal(statsHandler.runGetMedian(array), 23);
      done();
    });

    test("3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56", function(done) {
      var array = [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56];
      assert.equal(statsHandler.runGetMedian(array), 22);
      done();
    });
  });
});
