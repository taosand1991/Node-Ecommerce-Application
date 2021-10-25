// const twoSum = function (nums, target) {
//   const finalOutput = [];
//   const numberMap = new Map();
//   nums.forEach((number, index) => {
//     if (numberMap.has(target - number)) {
//       finalOutput.push(index);
//       finalOutput.push(numberMap.get(target - number));
//     } else numberMap.set(number, index);
//   });
//   console.log(numberMap);
//   console.log(finalOutput);
//   return [];
// };

// const mySum = twoSum([2, 7, 11, 15], 9);
// console.log(mySum);

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 2; j < nums.length; j++) {
//       console.log(i);
//       console.log(j);
//     }
//   }
//   return [];
// };
// twoSum([3, 2, 4], 6);
// console.log(twoSum([3, 2, 4], 6));

const reverseNumber = function (number) {
  if (number === 0) return 0;
  const string = number.toString();
  const stringSplit = string.split("").reverse().join("");
  const parsedNumber = parseFloat(stringSplit) * Math.sign(number);
  if (parsedNumber > Math.pow(2, 31) - 1 || parsedNumber < Math.pow(-2, 31))
    return 0;
  return parsedNumber;
};

const mine = reverseNumber(-1563847412);
console.log(mine);
