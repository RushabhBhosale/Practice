// function isPalindrom(number) {
//    const num = number.toString();
//    const reverseStr = num.split('').reverse('').join('');
//    return num === reverseStr;
// }

// const numberToCheck = 121;
// const output = isPalindrom(numberToCheck);
// console.log(output);

// : Write a function sumPositiveNumbers that takes an array of numbers as input and
// returns the sum of all positive numbers.
// Input: [1, -2, 3, 4, -5]
// Output: 8 (sum of positive numbers: 1 + 3 + 4)
// Object Key Check:

// let array = [1, -2, 3, 4, -5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//    if (array[i] > 0) {
//       sum += array[i]
//    }
// }

// console.log(sum)


// Question: Implement a function findMaxValue that finds and returns the maximum value in an
// array of integers.
// Input: [2, 8, 5, 1, 9]
// Output: 9 (the maximum value in the array)
// Object Property Count:

// let array = [2, 8, 5, 1, 9];

// let sortedArray = array.sort((a, b) => b - a);

// console.log(sortedArray[0]);


// Question: Write a function countProperties that takes an object as input and returns the total
// number of properties (keys) it contains.
// Input: {a: 1, b: 2, c: 3}
// Output: 3 (the object has three properties: a, b, c)

// let input = {a: 1, b: 2, c: 3};
// let output = 0

// for (let i in input) {
//    output += i.length;
// }  

// console.log(output)

// Question: Implement a function reverseArray that reverses the order of elements in an array
// without using the built-in reverse() method.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1] (the reversed array)

// let array = [1, 4, 3, 4, 5];
// let reversedArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//    reversedArray.push(array[i])
// }
// console.log(reversedArray)

// Question: Create a function capitalizeKeys that capitalizes the first letter of each key in an
// object.
// Input: {firstName: 'john', lastName: 'doe'}
// Output: {FirstName: 'john', LastName: 'doe'}

// let input = {firstName: 'john', lastName: 'doe'};

// let output = {};

// for(let key in input) {
//    let capitalizeKey = key.charAt(0).toUpperCase() + key.slice(1);
//    output[capitalizeKey] = input[key];
// }

// console.log(output)

// Question: Write a function removeDuplicates that removes duplicate elements from an array
// while maintaining the original order.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5] (array without duplicates)

// let array = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArray = [...new Set(array)];

// console.log(uniqueArray);

// Question: Implement a function sumObjectValues that calculates the sum of all numeric values
// in an object.
// Input: {a: 10, b: 20, c: 30}
// Output: 60 (sum of all numeric values in the object)

// let object = {a: 10, b: 20, c: 30}
// let sum = 0

// function ObjectValues() {
//    for (let key in object) {
//      sum += object[key]
//    }
// }
// ObjectValues()
// console.log(sum)

// Draw Pattern

// *
// **
// *
// **

// function drawPattern(num) {
//    for (let i = 0; i < num; i++) {
//       for (let j = 0; j < 1; j++) {
//          console.log("*")
//       }
//       console.log("**")
//    }
// }
// let row = 5
// drawPattern(row)


// for (let i = 4; i >= 1; i--) {
//    let output = '';
//    for (let j = 1; j<= i; j++) {
//       output += j;
//    }
//    console.log(output)
// }


// let array = [14, 0, 76, 0, 45, 0, 9, 4, 0, 5]

// let nonZeroElement = [];
// let zeroCount = 0;

// function moveZeroes(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== 0) {
//          nonZeroElement.push(arr[i]);
//       } else {
//          zeroCount++;
//       }
//    }
//    while (zeroCount > 0) {
//       nonZeroElement.push(0);
//       zeroCount--;
//    }
//  return nonZeroElement  
// }

// console.log(moveZeroes(array))

// write program to print even numbers in a range of numbers using while loop

// let number = 10
// let evenNumbers = []
// let num = 0
// while (num <= number) {
//    if (num % 2 === 0) {
//       evenNumbers.push(num)
//    }
//    num++
// }
// console.log(evenNumbers)

// let numbers = 50;
// let primeNumbers = [];

// function findPrimeNumbers(num) {
//    for (let i = 2; i <= num; i++) {
//       let isPrime = true
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//          if (i % 2 === 0) {
//             isPrime = false
//          }
//       }
//       if(isPrime) {
//          primeNumbers.push(i)
//       }
//    }
//    return primeNumbers
// }
// findPrimeNumbers()
// console.log(findPrimeNumbers(numbers))

// let num = 1233455;
// let str = num.toString();

// function reverse() {
//    let reverseNumStr = []
//    for (let i = str.length - 1; i >= 0; i--){
//       reverseNumStr.push(str[i])
//    }
//    let reverseNum = parseInt((reverseNumStr).join(''))
//    return reverseNum
// }

// console.log(reverse())

// Write a program  for print 1 to 100 number using while loop?

// let num = 100;
// let i = 1
// while (i <= num) {
//    console.log(i)
//    i++
// }


// String is palindrome or Not

// let str = 121
// let reverseStr = str.toString().split('').reverse().join('')
// let isPalindrom = str.toString() === reverseStr

// console.log(isPalindrom)

// let a = 5
// let b = 6
// console.log(a++)
// console.log(a)
// console.log(a++)
// console.log(a)
// console.log(--a)

// let str = "Rushabh"
// let charCount = str.length
// console.log(charCount)
// console.log(NaN == -0)

// let str = "HEEEEEllo World @$ "
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//    if(str[i] !== str[i].toLowerCase()) {
//       count ++;
//    }
// }

// console.log(count)

// let str = "Rushabh"
// let reverse = str.split('').reverse().join('');

// // for (let i = str.length -1; i >=0; i--) {
// //    reverse += str[i];
// // }

// console.log(reverse)

// let number = 6
// 	create a multiplication table upto 10 values

let number = 19

for(let i= 0; i <= 10; i++) {
   console.log(`${number} x ${i} = ${number * i}`)
}



