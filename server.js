var request = require("request");

var options = {
  method: "POST",
  url: "https://api.wassenger.com/v1/messages",
  headers: {
    token:
      "[REDACTED]",
    "content-type": "application/json"
  },
  body: {
    phone: "+972547303639",
    message: "אהלן!"
  },
  json: true
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
