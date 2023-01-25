const http = require("http");
let tasks = [{ name: "task1", isCompleted: false, desc: "Hair cut" }];
http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.write("Hello World!!");
    res.end();
  }
  else if (req.url === "/tasks" && req.method == "GET") {
    res.writeHead(200, { "Content-type": "text/json" });
    res.end(JSON.stringify({ "data": tasks }));
  }
  else if (req.method == "POST" && req.url === "/tasks/create") {
    console.log("Execting POST request");
    res.writeHead(201, { "Content-type": "text/json" });
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      data = JSON.parse(data);
      data["isCompleted"] = false;
      tasks.push(data);
      res.end(JSON.stringify(data));
    });
    console.log("POST ended");
  }
  else if (req.method === "PATCH") {
    res.writeHead(200, { "Content-type": "text/json" });
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      let index = parseInt(req.url.split("/").at(-1));
      if (index > tasks.length) {
        res.writeHead(400);
        res.end("Invalid Choice of Task");
      }
      else {
        data = JSON.parse(data);
        for (const [key, value] of Object.entries(data)) {
          tasks[index][key] = value;
        }
        res.end(JSON.stringify(tasks[index]));
      }
    });
  }
  else if (req.method === "PUT") {
    res.writeHead(200, { "Content-type": "text/json" });
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      data = JSON.parse(data);
      let index = parseInt(req.url.split("/").at(-1));
      if (index > tasks.length) {
        res.writeHead(400);
        res.end("Invalid Choice of Task");
      }
      else {
        tasks[index] = data;
        res.end(JSON.stringify(data));
      }
    });
  }
  else if (req.method === "DELETE") {
    res.writeHead(200, { "Content-type": "text/json" });
    tasks = tasks.filter((task) => task.isCompleted === false);
    res.end(JSON.stringify(tasks));
  }
  else if (req.method == "GET" && req.url.match(/tasks\/[0-9]/)) {
    res.writeHead(200, { "Content-type": "text/json" });
    let index = parseInt(req.url.split("/").at(-1));
    if (index >= tasks.length) {
      res.writeHead(400);
      res.end("Invalid Choice of Task");
    }
    else {
      res.end(JSON.stringify(tasks[index]));
    }
  }
  else {
    res.end(req.url);
  }
}).listen(8000, () => console.log("Server running on port 8000!"));