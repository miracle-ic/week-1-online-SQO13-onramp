function sumMix(arr) {
   let result = 0
   arr.map((el) => {
    result += parseInt(el);
   })
   return result;
 }

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));

  module.exports = sumMix