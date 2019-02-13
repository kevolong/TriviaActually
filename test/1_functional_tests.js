var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../server");
var expect = chai.expect;

chai.use(chaiHttp);

suite("Functional Tests", function() {
  //Quiz generation route
  suite("API ROUTING FOR /api/trivia", function() {
    suite("GET", function() {
      test("Test GET quiz - success", function(done) {
        chai
          .request(server)
          .get("/api/trivia")
          .end(function(err, res) {
            //console.log(res.body);
            assert.equal(res.status, 200);
            assert.isObject(res.body.quiz, "quiz should still be an object");
            assert.isObject(res.body.answer_key, "answer_key should be an object");
            assert.containsAllKeys(
              res.body.quiz,
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              "quiz should have 1-10 keys"
            );
            assert.containsAllKeys(
              res.body.answer_key,
              ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              "answer_key should have 1-10 keys"
            );
            assert.containsAllKeys(
              res.body.quiz["1"],
              ["question", "choices", "pic"],
              "quiz '1' should have question, choices, and pic keys"
            );
            assert.isString(res.body.quiz["1"].question, "Question should be a string");
            assert.equal(res.body.quiz["1"].choices.length, 4, "Choices should be an array of 4");
            assert.isString(res.body.quiz["1"].pic, "Pic should be a string");
            assert.isString(res.body.answer_key["1"], "answer_key '1' should be a string");
            done();
          });
      }); // end test GET quiz - sucesss

      test("Test GET 2 quizzes are different", function(done) {
        chai
          .request(server)
          .get("/api/trivia")
          .end(function(err, res) {
            let test1 = res.body;
            chai
              .request(server)
              .get("/api/trivia")
              .end(function(err, res) {
                let test2 = res.body;
                //console.log(test1, test2);
                assert.equal(res.status, 200);
                assert.notEqual(
                  test1.quiz["1"].question,
                  test2.quiz["1"].question,
                  "Question 1 should be different"
                );
                assert.notEqual(
                  test1.quiz["7"].question,
                  test2.quiz["7"].question,
                  "Question 7 should be different"
                );
                assert.notEqual(
                  test1.quiz["10"].question,
                  test2.quiz["10"].question,
                  "Question 10 should be different"
                );
                assert.notEqual(
                  test1.quiz["3"].choices,
                  test2.quiz["3"].choices,
                  "Choices 3 should be different"
                );
                done();
              });
          });
      }); // end test GET quiz - sucesss
    }); // end sub-suite POST
  }); // end suite API ROUTING for /api/score

  //Scoring route
  suite("API ROUTING FOR /api/score", function() {
    suite("POST", function() {
      test("Test POST score - success", function(done) {
        let score = 0;
        chai
          .request(server)
          .post("/api/score")
          .send({ score: score })
          .end(function(err, res) {
            console.log(res.body);
            assert.equal(res.status, 200);
            assert.isNumber(res.body.score, "Score should still be a number");
            assert.equal(res.body.score, score, "Score should come back same");
            assert.isString(res.body.percentile, "Percentile should be a string");
            assert.isString(res.body.congrats, "Congrats message should be a string");
            assert.isString(res.body.congrats, "Congrats gif should be a string");
            done();
          });
      }); // end test
    }); // end sub-suite POST
  }); // end suite API ROUTING for /api/score
}); // end suite Functional Tests
