function isPalindrom(number) {
   const num = number.toString();
   const reverseStr = num.split('').reverse('').join('');
   return num === reverseStr;
}

const numberToCheck = 121;
const output = isPalindrom(numberToCheck);
console.log(output);

