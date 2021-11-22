const moment = require("moment");

module.exports = formatMessage = (username, text) => {
  let time = moment().format("h:mm a");
  return { username, text, time };
};