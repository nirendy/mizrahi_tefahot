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

const addNewUser = (phoneNumber, name, imageUrl, actionItem) => {
  console.log("adding new user");
  var today = new Date();
  var time = `${showNumber(today.getHours())}:${showNumber(
    today.getMinutes()
  )}`;
  phoneNumber = phoneNumberConverter.fromAbroadToIsraeli(phoneNumber);
  firebase
    .database()
    .ref("users/" + phoneNumber)
    .set({
      phoneNumber,
      name,
      imageUrl,
      actionItem,
      time
    });
};

const showNumber = number => (number < 10 ? `0${number}` : number);

const database = {
  addNewUser
};

module.exports = database;
