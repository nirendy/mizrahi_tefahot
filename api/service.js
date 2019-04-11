const request = require("request");
const database = require("./database");
const utf8 = require("utf8");

const token =
  "16ae915d9afaad3931e425657892c6354e20f785018b749e62b5892e2172f8a15250f644c485e1cb";

const sendMessage = (phone, message) => {
  var options = {
    method: "POST",
    url: "https://api.wassenger.com/v1/messages",
    headers: {
      token: token,
      "content-type": "application/json"
    },
    body: {
      phone,
      message
    },
    json: true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var logMessage = "Message sent to the person";
    //database.writeNewLog(phone, logMessage);
  });
};

const getMessages = (phone, cb) => {
  var options = {
    method: "GET",
    url: "https://api.wassenger.com/v1/messages",
    qs: { size: "10", status: "sent", phone: phone },
    headers: { token: token }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    cb(body);
  });
};

const handleMessageThatWasReceived = (phoneNumber, message, name, imageUrl) => {
  console.log(utf8.encode(message));
  database.writeNewLog(phoneNumber, message, name);
  database.addNewUser(phoneNumber, name, imageUrl);
};

const service = {
  sendMessage,
  getMessages,
  handleMessageThatWasReceived
};

module.exports = service;
