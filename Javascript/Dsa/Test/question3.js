function removeDuplicates(array) {
   return[...new Set(array)]
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDuplicates(originalArray);

console.log(newArray);