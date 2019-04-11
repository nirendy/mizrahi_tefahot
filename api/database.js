const firebase = require("firebase");
const phoneNumberConverter = require("./../phoneNumberConverter");

const writeNewLog = (phoneNumber, message, name) => {
  console.log("adding new log");
  var today = new Date();
  var time = `${showNumber(today.getHours())}:${showNumber(
    today.getMinutes()
  )}`;

  firebase
    .database()
    .ref(
      "logs/" +
        phoneNumberConverter.fromAbroadToIsraeli(phoneNumber) +
        "/" +
        time
    )
    .set({
      time: time,
      message: message,
      name: name
    });
};

const addNewUser = (phoneNumber, name, imageUrl) => {
  console.log("adding new user");
  phoneNumber = phoneNumberConverter.fromAbroadToIsraeli(phoneNumber);
  firebase
    .database()
    .ref("users/" + phoneNumber)
    .set({
      phoneNumber,
      name,
      imageUrl,
      actionItems: [],
      date: Date.now()
    });
};

const showNumber = number => (number < 10 ? `0${number}` : number);

const database = {
  writeNewLog,
  addNewUser
};

module.exports = database;
