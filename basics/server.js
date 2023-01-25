const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {
  res.writeHead(200);
  let num1 = 5;
  let num2 = 10;
  res.end(`Hello, the multiplication of ${num1} and ${num2} is ${num1*num2}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});