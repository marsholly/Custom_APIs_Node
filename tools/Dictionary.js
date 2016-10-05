const axios = require('axios');

const Dictionary = (query,res) =>{
  let { word } = query;
  let result;
  axios.get(`https://owlbot.info/api/v1/dictionary/${word}`)
    .then( response => {
      let { data } = response;
      let information = '';
      data.map((d, index) => {
        information += `${index}: ${d.type}. ${d.defenition}  Example: ${d.example}. \n`
      })
      res.write(information);
      res.end('\n');
    })
    .catch(console.error);
}

module.exports = Dictionary;
