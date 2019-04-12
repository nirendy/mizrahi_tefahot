const service = require("./service");
const api = require("express").Router();

const testPhoneNumber = "+972542048003";

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
  let phoneNumber = req.body.data.fromNumber;
  let message = req.body.data.body;
  let name = req.body.data.chat.contact.displayName;
  let imageUrl = req.body.data.chat.contact.imageUrl;

  console.log(message.indexOf("עובר ושב") > -1);

  service.handleMessageThatWasReceived(phoneNumber, message, name, imageUrl);

  res.status(200).json({ message: "Webhook get message reached" });
});

module.exports = api;
