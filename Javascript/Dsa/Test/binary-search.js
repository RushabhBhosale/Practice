// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const nums = [1, 2, 3, 5, 7, 8, 9];
const target = 9;


function binarySearch(nums, target) {
   let leftIndex = 0;
   let rightIndex = nums.length - 1;

   while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

      if (target === nums[middleIndex]) {
         return middleIndex
      }
      if (target > nums[middleIndex]) {
         leftIndex = middleIndex + 1;
      } else {
         rightIndex = middleIndex - 1;
      }
   }
   return -1
}

const result = binarySearch(nums, target);

console.log(result);

