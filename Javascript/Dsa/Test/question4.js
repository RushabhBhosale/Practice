function findMissingNumber(arr) {
   const n = arr.length + 1; 
   const expectedSum = (n * (n + 1)) / 2;
   const actualSum = arr.reduce((sum, num) => sum + num, 0);

   return expectedSum - actualSum;
}

const inputArray = [2, 4, 1, 3, 6, 7, 8];
const missingNumber = findMissingNumber(inputArray);

console.log(missingNumber); 
