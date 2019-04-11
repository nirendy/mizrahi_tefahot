var firebase = require("firebase");

const writeNewLog = (userId, message, contactName) => {
  var today = new Date();

  console.log("im here");
  var time = `${today.getHours()}:${today.getMinutes()}`;
  firebase
    .database()
    .ref("logs/" + userId + "/" + time)
    .set({
      time: time,
      message: message,
      contactName: contactName
    });
};

const database = {
  writeNewLog
};

module.exports = database;
