# LOOPS ///////////////////////////////////////////////////////////

# a = 5

# while a <= 5:
#   print("Hello")
#   a += 1
# print(a)

# i = 1
# while i <= 5:
#   print("Raju")
#   i += 1

i = 1
j =100

# while i < j+1:
#   print(i)
#   i += 1

# while j >= i:
#   print(j)
#   j -= 1

# n = int(input("enter n value: "))
# i = 1

# while i <= 10:
#   print(n,"*",i,"=",n * i)
#   i += 1

# nums = [1, 4, 9, 16, 25, 49, 64, 81, 100]
# i = 0

# while i < len(nums):
#   print(nums[i])
#   i += 1

# tup = (1, 4, 9, 16, 25, 49, 64, 81, 100)
# i = 0
# x = int(input("enter x value: "))

# while i < len(tup):
#   if(tup[i] == x):
#     print("at index",i)
#   else:
#     print("not in the list")
#   i += 1

# BREAK //////////////////////////////////////////////////////////

# i = 1

# while i <= 5:
#   if(i == 3):
#     print(i)
#     break
#   i += 1

# FOR LOOP /////////////////////////////////////////////////////////////////

# list = [1,2,3,4,5,6,7,8,9,0]
# letters = ["a","b","c","d","e","f","g"]
# tup = (1,2,3,4,5,6,7,8,9,0)

# for val in tup:
#   print(val)

# nums = [1, 4, 9, 16, 25, 49, 64, 81, 100]

# x = int(input("enter x value: "))

# for i in nums:
#   if(i == x):
#     print(i)
#     break
#   else:
#     print("not in the list")

# a = int(input("enter a value: "))
# b = int(input("enter b value: "))

# for num in range(a, b+1):
#     print(f"\nMultiplication Table of {num}:")
#     for i in range(1, 11): 
#         print(f"{num} * {i} = {num * i}")

# n = int(input('enter n value'))
# sum = 0
# i=1

# for i in range(n):
#   sum += n
#   print(sum)

# while i < n:
#  sum += i
#  print(sum)
#  i+1

n = int(input("enter n value: "))
fact = 1

for i in range(1,n+1):
  fact *= i
  print(fact)
print(fact)