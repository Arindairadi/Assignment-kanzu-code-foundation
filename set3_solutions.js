// 1. Count how many times "a" appears in a string
let text = "iradi is from kabale!";
let countA = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") {
    countA++;
  }
}
console.log("Count of 'a': " + countA);

// 2. Sum all numbers in an array
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log("Sum of array: " + sumArray([1, 2, 3, 4, 5]));

// 3. Log all key-value pairs in an object
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

// 4. Check if 5 exists in an array
let array = [1, 2, 3, 4, 5];
let exists = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    exists = true;
    break;
  }
}
console.log("5 exists: " + exists);

// 5. Find the largest number in an array
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
console.log("Largest number: " + findMax([1, 3, 7, 2, 5]));

// 6. Combine two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log("Combined array: " + combined);

// 7. Reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("Reversed string: " + reverseString("hello"));

// 8. Check if a number exists in an array
function checkNumberInArray(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return "Found";
    }
  }
  return "Not Found";
}
console.log(checkNumberInArray(3, [1, 2, 3, 4]));

// 9. Count vowels in a string
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log("Vowel count: " + countVowels("Iradi Arinda"));

// 10. Remove duplicate values from an array
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log("Array without duplicates: " + removeDuplicates([1, 2, 2, 3, 4, 4]));

// 11. Filter numbers greater than 10
let numbers = [4, 11, 8, 15, 2];
let filtered = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    filtered.push(numbers[i]);
  }
}
console.log("Filtered numbers: " + filtered);

// 12. Check if a string is a palindrome
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
console.log("Is 'madam' a palindrome? " + isPalindrome("madam"));
