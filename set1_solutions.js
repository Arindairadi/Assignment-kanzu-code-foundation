// 1. Calculate the area of a rectangle
let length = 5;
let width = 10;
console.log("Area of rectangle: " + (length * width));

// 2. Multiply a variable by 5 using the *= operator
let num = 4;
num *= 5;
console.log("Multiplied value: " + num);

// 3. Check if two variables have the same value and type
let var1 = 10;
let var2 = "10";
console.log("Same value and type: " + (var1 === var2));

// 4. Compare if 10 is greater than or equal to 5
console.log("10 >= 5: " + (10 >= 5));

// 5. Concatenate the strings "Hello" and "World"
let hello = "Hello";
let world = "World";
console.log(hello + " " + world);

// 6. Extract the word "fun" from "Coding is fun"
let sentence = "Coding is fun";
console.log("Extracted word: " + sentence.slice(9));

// 7. Check if a number is positive, negative, or zero
let number = -3;
if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// 8. Use a ternary operator to check if a number is odd or even
let checkNumber = 7;
console.log(checkNumber % 2 === 0 ? "Even" : "Odd");
