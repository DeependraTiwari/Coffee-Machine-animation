const express = require("express");
const App = express();

App.get("/", (req, res) => res.sendFile(__dirname + "/coffee.html"));
App.get("/animation", (req, res) => res.sendFile(__dirname + "/coffee2.html"));
App.post("/", (req, res) => res.sendFile(__dirname + "/coffee3.html"));

App.listen(3000, function () {
  console.log("The server has started running on port 30000");
});
