const moment = require('moment');

const Age = (query) => {
  let { birthdate } = query;
  let birth = moment(birthdate, 'MM-DD-YYYY');
  let age = Math.round(moment().diff(birth,'years', true));
  return age;
}

module.exports = Age;
