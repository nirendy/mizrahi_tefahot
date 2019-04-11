const service = require("./service");
const database = require("./database");
const api = require("express").Router();

const testPhoneNumber = "+972547303639";

api.get("/sendMessage", (req, res) => {
  service.sendMessage(testPhoneNumber, "Checking the API");
  res.status(200).json({ message: "Message sent to blahs" });
});

api.get("/getMessages", (req, res) => {
  service.getMessages(testPhoneNumber, messages => {
    console.log(messages);
    res.status(200).json({ messages: messages });
  });
});

api.post("/webHookGetMessage", (req, res) => {
  console.log(req.body.data);
  //var number = req.body.data.fromNumber;
  //var message = req.body.data.body;
  // database.writeNewLog(number, message)
  res.status(200).json({ message: "Webhook get message reached" });
});

module.exports = api;
