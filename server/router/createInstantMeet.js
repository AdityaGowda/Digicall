const express = require("express");
const createMeetRouter = express.Router();
const createInstantMeetController = require("../controllers/createInstantMeetController");
const { checkAuthToken } = require("../middleware/authTokenMiddleware");

createMeetRouter.post(
  "/createMeet",
  checkAuthToken,
  createInstantMeetController.createInstantMeet
);

module.exports = createMeetRouter;
