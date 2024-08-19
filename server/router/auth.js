const express = require("express");
const auth = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
auth.post(
  "/login",
  authMiddleware.checkAccountAlreadyExist,
  authController.login
);
auth.post(
  "/signup",
  authMiddleware.checkAccountAlreadyExist,
  authController.signUp
);
module.exports = auth;
