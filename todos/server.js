const http = require('http');
let tasks = [{ name: "task1", isCompleted: false, desc: "Buy Food" }]
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200);
        res.write("Hello World");
        res.end();
    }
    else if (req.url === "/tasks") {
        res.end(JSON.stringify({ "data": tasks }));
    }
    else if (req.method = "POST" && req.url === "/tasks/create") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            data = JSON.parse(data);
            res.end(JSON.stringify(data));
        })
    }
    // else if(req.url==="/tasks/")
}).listen(8000, () => console.log("Server running on port 8000!"));