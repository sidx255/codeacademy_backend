let express = require("express");  
let app = express();  
app.use(express.static("public"));  
  
// app.get("/index.html", function (req, res) {  
//   res.sendFile( __dirname + "/" + "index.html" );  
// });  
app.get("/process_get", function (req, res) {  
  res = {  
    first_name:req.query.first_name,  
    last_name:req.query.last_name  
  };  
  console.log(res);  
  res.end(JSON.stringify(res));  
});  
let server = app.listen(8000, function () {  
  
  let host = "localhost";  
  let port = 8080;  
  console.log("Example app listening at http://%s:%s", host, port);  
  
});  