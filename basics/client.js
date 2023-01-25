
// Importing https module
const http = require("http");

// Setting the configuration for
// the request
const options = {
  hostname: "localhost",
  port: 8000,
  path: "",
  //path: '/exchange_rates',
  method: "GET"
};
	
// Sending the request
const req = http.request(options, (res) => {
  let data = "";
	
  res.on("data", (chunk) => {
    data += chunk;
  });
	
  // Ending the response
  res.on("end", () => {
    //console.log('Body:', JSON.parse(data))
    console.log("Body:", data);

  });
	
}).on("error", (err) => {
  console.log("Error: ", err);
}).end();


