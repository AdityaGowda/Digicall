const express = require("express");
const app = express();

const createInstantMeet = require("./router/createInstantMeet");

app.use("/api", createInstantMeet);

app.listen(8000, () => {
  console.log("yes...!");
});
