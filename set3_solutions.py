# Set 3: Combined Concepts

# 1. Count occurrences of 'a' in a string
str = "JavaScript is amazing!"
count = str.count("a")
print(count)

# 2. Function sumArray
def sumArray(arr):
    return sum(arr)

print(sumArray([1, 2, 3, 4]))

# 3. Log key-value pairs of an object
obj = {"a": 1, "b": 2, "c": 3}
for key, value in obj.items():
    print(f"{key}: {value}")

# 4. Check if 5 exists in an array using includes
arr = [1, 2, 3, 4, 5]
print("Found" if 5 in arr else "Not Found")

# 5. Function findMax
def findMax(arr):
    return max(arr)

print(findMax([1, 2, 3, 4, 5]))

# 6. Combine two arrays using concat
arr1 = [1, 2]
arr2 = [3, 4]
print(arr1 + arr2)

# 7. Reverse a string
def reverseString(str):
    return str[::-1]

print(reverseString("Iradi"))

# 8. Check if a number exists in an array
def findNumber(num, arr):
    return "Found" if num in arr else "Not Found"

print(findNumber(3, [1, 2, 3, 4]))

# 9. Count vowels in a string
def countVowels(str):
    return sum(1 for char in str if char.lower() in "aeiou")

print(countVowels("hello Iradi"))

# 10. Check if two arrays are equal
def arraysEqual(arr1, arr2):
    return arr1 == arr2

print(arraysEqual([1, 2], [1, 2]))
