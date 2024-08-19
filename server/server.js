const express = require("express");
const app = express();
const db = require("./db/configDB");

const createInstantMeet = require("./router/createInstantMeet");
const { createMemberTable } = require("./db/tables/memberTable");
const { createMeetTable } = require("./db/tables/meetTable");
const { createMeetInviteTable } = require("./db/tables/joinMeetInvite");
const auth = require("./router/auth");
app.use(express.json());
app.use("/api", createInstantMeet);
app.use("/api", auth);
db.connect((err) => {
  if (err) throw err;
  console.log("db connected");
  createMemberTable();
  createMeetTable();
  createMeetInviteTable();
});

app.listen(8000, () => {
  console.log("yes...!");
});
