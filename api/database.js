var firebase = require("firebase");

const writeNewLog = (userId, messageNumber,time, message) => {
    firebase.database().ref('logs/' + userId + "/" + messageNumber).set({
        time: time,
        message: message
    });
}

const database = {
    writeNewLog
};

module.exports = database;