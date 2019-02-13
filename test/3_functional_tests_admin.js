var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../server");
var expect = chai.expect;

chai.use(chaiHttp);

suite("Functional Tests", function() {
  //Admin stats route
  suite("API ROUTING FOR /admin/stats", function() {
    suite("POST", function() {
      test("Test POST password - incorrect password", function(done) {
        let password = "cheese";
        chai
          .request(server)
          .post("/admin/stats")
          .send({ password: password })
          .end(function(err, res) {
            assert.equal(res.status, 400, "Incorrect password should get Bad Request error code");
            expect(res).to.be.html;
            done();
          });
      }); // end test
      test("Test POST password - success", function(done) {
        let password = process.env.ADMIN_PS;
        chai
          .request(server)
          .post("/admin/stats")
          .send({ password: password, format: "json" })
          .end(function(err, res) {
            console.log(res.body);

            const allCount =
              res.body.scoreStats.zeroCount +
              res.body.scoreStats.tenCount +
              res.body.scoreStats.twentyCount +
              res.body.scoreStats.thirtyCount +
              res.body.scoreStats.fortyCount +
              res.body.scoreStats.fiftyCount +
              res.body.scoreStats.sixtyCount +
              res.body.scoreStats.seventyCount +
              res.body.scoreStats.eightyCount +
              res.body.scoreStats.ninetyCount +
              res.body.scoreStats.hundredCount;
            assert.equal(res.status, 200);
            assert.isNumber(res.body.triviaData.easyCount, "easyCount should be a number");
            assert.isNumber(res.body.triviaData.medCount, "medCount should be a number");
            assert.isNumber(res.body.triviaData.hardCount, "hardCount should be a number");
            assert.isNumber(res.body.scoreStats.totalCount, "totalCount should be a number");
            assert.isNumber(res.body.scoreStats.average, "average should be a number");
            assert.isNumber(res.body.scoreStats.median, "median should be a number");
            assert.isNumber(res.body.scoreStats.zeroCount, "zeroCount should be a number");
            assert.isNumber(res.body.scoreStats.twentyCount, "twentyCount should be a number");
            assert.isNumber(res.body.scoreStats.thirtyCount, "thirtyCount should be a number");
            assert.isNumber(res.body.scoreStats.fortyCount, "fortyCount should be a number");
            assert.isNumber(res.body.scoreStats.fiftyCount, "fiftyCount should be a number");
            assert.isNumber(res.body.scoreStats.sixtyCount, "sixtyCount should be a number");
            assert.isNumber(res.body.scoreStats.seventyCount, "seventyCount should be a number");
            assert.isNumber(res.body.scoreStats.eightyCount, "eightyCount should be a number");
            assert.isNumber(res.body.scoreStats.ninetyCount, "ninetyCount should be a number");
            assert.isNumber(res.body.scoreStats.hundredCount, "hundredCount should be a number");
            assert.isNumber(res.body.ipStats.ipCount, "ipCount should be a number");
            assert.equal(
              allCount,
              res.body.scoreStats.totalCount,
              "totalCount and sum of all score counts should be equal"
            );
            done();
          });
      }); // end test
    }); // end sub-suite POST
  }); // end suite ADMIN ROUTING for /admin/stats}); // end of suite
});
