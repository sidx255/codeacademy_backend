// ROuter for express

const express = require("express");
const router = express.Router();

// Import auth controller
const authController = require("../controllers/authController");

// Create auth router
router.post("/aadhar/otp", authController.aadharOtp);

module.exports = router;