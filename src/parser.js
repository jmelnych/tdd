export default {
  parse: (str) => {
    const arr = str.split('\n').join().split(',');
    return arr.includes('') ? ['error'] : arr.map(str => Number(str));
  }
}
