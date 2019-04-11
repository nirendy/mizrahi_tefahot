var request = require("request");

var options = {
  method: "POST",
  url: "https://api.wassenger.com/v1/messages",
  headers: {
    token:
      "5b90d5dbc765832d3c965564dfd6f229a251c465b4d1cc39ecca07b9a740664de6c59b805a8111c2",
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
