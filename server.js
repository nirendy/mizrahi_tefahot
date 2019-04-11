const express = require("express");
const api = require("./api");
const bodyParser = require("body-parser");
const app = express();
const firebase = require("firebase");
const database = require("./api/database");
const port = process.env.PORT || 3000;

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyAAteZKRTGZYBD6623fD1j-vW9bOCx6gQs",
  authDomain: "mizrahitefahot-cbc1e.firebaseapp.com",
  databaseURL: "https://mizrahitefahot-cbc1e.firebaseio.com",
  projectId: "mizrahitefahot-cbc1e",
  storageBucket: "mizrahitefahot-cbc1e.appspot.com",
  messagingSenderId: "1020005510202"
};
firebase.initializeApp(config);

database.writeNewLog("0541111111", "1", "10:38", "my message");

// setup the app middlware
//require('./middleware/appMiddleware')(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.listen(port);

console.log(`listening on port ${port}`);

module.exports = app;
