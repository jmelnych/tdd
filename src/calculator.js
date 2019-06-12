const reducer = (accumulator, currentValue) => accumulator + currentValue;
const errorHandler = arr => arr[0] === 'error';

export default {
  sum: (arr) => errorHandler(arr) || arr.reduce(reducer),
  minus: (arr) => errorHandler(arr) || arr[0] - arr[1],
  multiply: arr => errorHandler(arr) || arr[0] * arr[1],
};

