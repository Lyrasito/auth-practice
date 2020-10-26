const router = require("./Router.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/router", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

module.exports = app;
