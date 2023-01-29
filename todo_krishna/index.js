// Simple Express server
const express = require("express");
//const axios = require("axios");
const {aadharOtp} = require("./controllers/authController");
const app = express();
const port = 3000;

// Parse middleware
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));

app.get("/auth/aadhar/otp", aadharOtp);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

