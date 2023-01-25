let tasks = [{ name: "task1", isCompleted: false, desc: "Hair cut" }]
const http = require('http');

// Setting the configuration for
// the request
const options = {
	hostname: 'localhost',
	port: 8000,
	path: '',
	//path: '/exchange_rates',
	method: 'GET'
};

// Sending the request
const req = http.request(options, (res) => {
	if (req.url === "/") {
		res.writeHead(200);
		res.write("Hello World!!");
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
			data['promit ka beta'] = "Siddarth Sharma";
			res.end(JSON.stringify(data));
		})
	}
	// else if(req.url==="/tasks/")
});