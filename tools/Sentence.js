const Sentence = (query) => {
  let code = query.analyzer;
  //Word count
  let wordCount = code.match(/[a-z]+/gi).length;
  //Character count
  let charCount = code.match(/\S/g).length;
  //Average word length
  let arr = code.match(/[a-z]+/gi);
  let average = ( arr.reduce((sum, next)=>{  return sum += next; }, 0).length ) / wordCount;
  let result = `The word count is ${wordCount}; The Character count is ${charCount}; The average word length is ${average}`;
  return result;
}

module.exports = Sentence;
