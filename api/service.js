const request = require("request");
const database = require("./database");

const token =
  "5b90d5dbc765832d3c965564dfd6f229a251c465b4d1cc39ecca07b9a740664de6c59b805a8111c2";

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

const service = {
  sendMessage,
  getMessages
};

module.exports = service;
