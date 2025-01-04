# Set 1: Data Types, Variables & Arithmetic Operators

# 1. Calculate the area of a rectangle
length = 5
width = 10
area = length * width
print(f"The area of the rectangle is {area}")

# 2. Multiply a variable by 5 using *= operator
number = 7
number *= 5
print(number)

# 3. Check if two variables have the same value and type
var1 = 10
var2 = "10"
print("Same value and type" if var1 === var2 else "Different")

# 4. Compare if 10 is greater than or equal to 5
print("True" if 10 >= 5 else "False")

# 5. Concatenate strings "Hello" and "Iradi" with a space
str1 = "Hello"
str2 = "Iradi"
result = f"{str1} {str2}"
print(result)

# 6. Extract the word "fun" from "Coding is fun"
str = "Coding is fun"
word = str[9:12]
print(word)

# 7. Check if a number is positive, negative, or zero
num = -3
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")

# 8. Check if a number is odd or even using ternary operator
number = 4
print("Even" if number % 2 == 0 else "Odd")
