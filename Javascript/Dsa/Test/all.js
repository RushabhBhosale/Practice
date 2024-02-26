// let num = 1231;
// let numStr = num.toString();
// let reverseNumStr = numStr.split('').reverse().join('');
// console.log(reverseNumStr === numStr);

// : Write a function sumPositiveNumbers that takes an array of numbers as input and
// returns the sum of all positive numbers.
// Input: [1, -2, 3, 4, -5]
// Output: 8 (sum of positive numbers: 1 + 3 + 4)
// Object Key Check:

// let input = [1, -2, 1, 6, 3, 4, -5];
// let output = 0

// for (let i = 0; i < input.length; i++) {
//    if (input[i] > 0) {
//       output += input[i]
//    }
// }

// console.log(output)

// Question: Implement a function findMaxValue that finds and returns the maximum value in an
// array of integers.
// Input: [2, 8, 5, 1, 9]
// Output: 9 (the maximum value in the array)
// Object Property Count:

// let input = [2, 8, 5, 1, 9];
// let output = [...new Set(input)].sort((a, b) => b - a);
// console.log(output[0])