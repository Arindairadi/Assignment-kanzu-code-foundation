# Set 2: Functions & Loops

# 1. Function greet
def greet(name):
    return f"Hello, {name}!"

print(greet("Iradi"))

# 2. Function add
def add(num1, num2):
    return num1 + num2

print(add(5, 10))

# 3. Function isEven
def isEven(number):
    return number % 2 == 0

print(isEven(4))

# 4. For loop to print numbers from 1 to 10
for i in range(1, 11):
    print(i)

# 5. While loop to print the first 5 multiples of 3
i = 1
while i <= 5:
    print(i * 3)
    i += 1

# 6. For loop to calculate factorial of n
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print(factorial(5))
