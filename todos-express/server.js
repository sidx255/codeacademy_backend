const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
let counter = 0;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/tasks", (req, res) => {
  res.send(tasks);
});
app.get("/tasks/:id", (req, res) => {
  res.send(tasks[req.params.id]); // can also be written as req.params['id]
  
});
app.post("/tasks", (req, res) => {

  let task = req.body;
  task["isCompleted"] = false;
  task["id"] = counter;
  counter++;
  tasks.push(task);
  console.log(tasks);
  res.send(task);
});
app.put("/tasks/:id", (req, res) => {
  tasks[req.params.id].isCompleted = true;
  res.send(tasks[req.params.id]);
});
app.delete("/tasks", (req, res) => {
  for (let idx = 0; idx < tasks.length; idx++) {
    if (tasks[idx].isCompleted == true) {
      tasks.splice(idx, 1);
    }
  }
  res.send(tasks);
});
app.listen(8000, () => console.log("Server running on port 8000!"));



// app.route("/tasks").get() {}. post() {}