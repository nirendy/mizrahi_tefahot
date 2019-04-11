var firebase = require("firebase");

const writeNewLog = (userId, message) => {
    var today = new Date();
    var time = today.getTime();
    firebase.database().ref('logs/' + userId + "/" + time).set({
        time: time,
        message: message
    });
}

const database = {
    writeNewLog
};

module.exports = database;