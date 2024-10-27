# GUESS THE NUMBER //////////////////////////////////////////////////////////

# import random

# target = random.randint(1,100)

# while True:
#   userChoice = input("guess the num or Quit(Q) : ")
#   if(userChoice == "Q" or userChoice == "q"):
#     break
#   userChoice = int(userChoice)
#   if(userChoice == target):
#     print("SUCCESS : CORRECT GUESS")
#     break
#   elif(userChoice < target):
#     print("TOO SMALL, GUESS AGAIN")
#   else:
#     print("TOO BIG, GUESS AGAIN")


# print("----GAME OVER----")

# RANDOM PASSWORD GENRATOR //////////////////////////////////////////////////

import random
import string

charVarl = string.ascii_letters + string.digits + string.punctuation



password_len = 12
password = ""


# METHOD 1 GENERATE PASSWORD 

for i in range(password_len):
  password += random.choice(charVarl)

print("Password -->",password)



# METHOD 2 GENERATE PASSWORD 
password = "".join([random.choice(charVarl) for i in range(password_len)])

print("password -->", password)