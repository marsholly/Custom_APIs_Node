const MathPart = (query) => {
  let arr = Object.keys(query);
  let operation = arr[0];
  let operands = query[operation];
  let operandsArr = operands.split('/');
  let number_1 = Number(operandsArr[0]);
  let number_2 = Number(operandsArr[1]);
  let result;
  switch (operation) {
    case 'add':
      result = number_1 + number_2;
      break;
    case 'minus':
      result = number_1 - number_2;
      break;
    case 'multiply':
      result = number_1 * number_2;
      break;
    case 'divide' :
      if ( number_2 === 0 ){
        result = '0 cannot be divided';
      } else {
        result = (number_1 / number_2).toFixed(2);
      }
      break;
    case 'exponent' :
      result = Math.pow(number_1, number_2);
      break;
  }
  return result;
}
module.exports = MathPart;
