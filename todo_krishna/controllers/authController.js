 
// import encryption service
const crypto = require("crypto");
 
const aadharOtp = async (req, res) => {
  
  const aadhar = req.body.aadhar;
  
  // Make API call to get public key using axios
  const publickeyResponse = await fetch("https://healthidsbx.abdm.gov.in/api/v1/auth/cert");
  console.log(JSON.parse(publickeyResponse.body.toString()));
  
  const publickey = await publickeyResponse.data.publickey;
  
  // Encrypt number using public key
  const encryptedAadhar = crypto.publicEncrypt(publickey, Buffer.from(aadhar)).toString("base64");
  
  // Call aadhar otp api
  const otpResponse = await fetch("https://healthidsbx.abdm.gov.in/api/v2/auth/aadhaar/otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      aadhaar: encryptedAadhar
    })
  });
  
  //console.log(publickey);
  
  res.send({
    status: "success",
    message: "OTP sent to your mobile number",
    body: otpResponse.body
  });
};
module.exports = {
  aadharOtp
};