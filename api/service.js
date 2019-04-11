const token =
  "[REDACTED]";

const request = require("request");

const sendMessage = (phone, message) => {
  var options = {
    method: "POST",
    url: "https://api.wassenger.com/v1/messages",
    headers: {
      token:
        "[REDACTED]",
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
    console.log(body);
  });
};

const service = {
  sendMessage
};

module.exports = service;
