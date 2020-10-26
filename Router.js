const express = require("express");
const router = express.Router();

const validateLogin = (req, res, next) => {
  if (req.headers.username === "user" && req.headers.password === "password") {
    console.log("I did it");
    next();
  } else {
    res.sendStatus(401);
  }
};
router.get("/login", validateLogin, (req, res, next) => {
  res.status(200).send({ thing: "thing" });
});
module.exports = router;
