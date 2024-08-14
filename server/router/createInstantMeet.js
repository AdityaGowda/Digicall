const express = require("express");
const createMeetRouter = express.Router();

const createInstantMeetController = require("../controllers/createInstantMeetController");

createMeetRouter.get(
  "/createMeet",
  createInstantMeetController.createInstantMeet
);

module.exports = createMeetRouter;
