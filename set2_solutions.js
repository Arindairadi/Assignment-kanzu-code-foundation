// 1. Greet a user
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Iradi"));

// 2. Add two numbers
function add(a, b) {
  return a + b;
}
console.log("Sum: " + add(5, 10));

// 3. Check if a number is even
function isEven(number) {
  return number % 2 === 0;
}
console.log("Is 4 even? " + isEven(4));

// 4. Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5. Print the first 5 multiples of 3 using a while loop
let count = 1;
while (count <= 5) {
  console.log(count * 3);
  count++;
}

// 6. Calculate the factorial of a number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial of 5: " + factorial(5));
