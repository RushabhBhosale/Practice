// let str= "Ruahah";

// let reverseStr = str.split('').reverse().join('');
// console.log(reverseStr)

// let array = [2,3,4,5,6,7,1,9,4,64];
// let reversedArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//    reversedArray.push(array[i])
// }

// console.log(reversedArray)

// let array = [2, 3, 3, 4, 6, 5, 6, 7, 1, 9, 4, 64];
// let duplicates = [];

// for (let i = 0; i < array.length; i++) {
//    for (let j = i + 1; j < array.length; j++) {
//       if (array[i] == array[j] && !duplicates.includes(array[i])) {
//          duplicates.push(array[i])
//       }
//    }
// }

// console.log(duplicates)

// let n = 10

// for (let i = 1; i <= n; i++) {
//    let pattern = '';
//    for (let j = 1; j <= i; j++) {
//       pattern += (i * 2).toString();
//    }
//    console.log(pattern);
// }

// let array = [1, 3, 4, 5, 6, 7, 8];

// function findMissingNum(num) {
//    const n = num.length + 1;
//    let expectedSum = (n * (n + 1) / 2);
//    let actualSum = num.reduce((a,b) => a + b, 0)

//    let missingNumber = expectedSum - actualSum;
//    return missingNumber
// }

// let result = findMissingNum(array);
// console.log(result);

// let property = "First Name";
// let name = "Rushabh";

// let user = {
//    [property] : name,
// }

// console.log(user)

// let user = {
//    name: "rushabh",
//    age: 23,
//    gender: "M"
// }

// for (key in user) {
//    console.log(user[key])
// }