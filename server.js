const path = require("path");
const express = require("express");
const api = require("./api");
const request = require("request");

const app = express();

// setup the app middlware
//require('./middleware/appMiddleware')(app);

//app.use(express.static(path.join(__dirname, '../dist'), { maxAge: cacheTime }));

// setup the api
app.use("/api/", api);

// BrowserHistory code - We need this so react router could work.
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
// });

// app.use((err, req, res) => {
//   // if error thrown from jwt validation check <- In the future
//   // if (err.name === 'UnauthorizedError') {
//   //   res.status(401).send('Invalid token');
//   //   return;
//   // }

//   res.status(500).send('Error');
// });

app.listen(3000);

console.log(`listening on port 3000`);

module.exports = app;
