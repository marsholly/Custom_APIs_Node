const md5 = require('md5');

const Gravatar = (query) => {
  let mail = query.email;
  let hashMail = md5(mail);
  let url = `http://www.gravatar.com/avatar/${hashMail}`;
  let image = `<html><body><img src=${url}/></body></html>`;
  return image;
}

module.exports = Gravatar;
