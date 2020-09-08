const express = require("express");
const burgerModel = require('../models/burger');
const router = express.Router();

router.get("/", async function (req, res) {
  // burgerModel.all(function (data) {
  //   var hbsObject = {
  //     cats: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
  const obj = await burgerModel.all();
  console.log(obj);
});


module.exports = router;

