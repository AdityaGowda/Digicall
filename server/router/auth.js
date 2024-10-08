const express = require("express");
const auth = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const authTokenVerification = require("../middleware/authTokenMiddleware");

auth.post("/login", authMiddleware.checkAccountNotExist, authController.login);
auth.post(
  "/signup",
  authMiddleware.checkAccountAlreadyExist,
  authController.signUp
);

auth.post(
  "/verifyDigiLoginToken",
  authTokenVerification.checkAuthToken,
  authController.userVerification
);
module.exports = auth;
