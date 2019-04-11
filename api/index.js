const service = require("./service");
const api = require("express").Router();

api.get("/sendMessage", (req, res) => {
  service.sendMessage("+972547303639", "Checking the API");
  res.status(200).json({ message: "Message sent to blahs" });
});

module.exports = api;
