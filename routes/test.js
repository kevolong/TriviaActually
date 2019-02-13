var express = require("express");
var router = express.Router();

//500 Test
router.get("/500", function(req, res, next) {
  let err = new Error("Internal Server Error");
  err.status = 500;
  next(err);
});

//general Test
router.get("/general", function(req, res, next) {
  let err = new Error();
  err.status = 504;
  next(err);
});

module.exports = router;
