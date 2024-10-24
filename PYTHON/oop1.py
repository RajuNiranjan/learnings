# OPP /////////////////////////////////////////////////////////////////

# CREATING CLASS 
# class Student:
#   name = "John Deo"

# s1 = Student()
# print(s1.name)

# class Car:
#   color = "red"
#   model = "1969"
#   brand = "Ford"

# c1 = Car()
# print(c1.color)

# __INIT__() CONSTRUCTOR ///////////////////////////////////////////////////

# class Student:
  
#   # DEFAULT CONSTURCTOR 
#   def __init__(selr):
#     pass

#   # PARAMETER CONSTRUCTOR 
#   def __init__(self, fullName, marks, age):
#     self.name = fullName
#     self.marks = marks
#     self.age = age
#     print("adding new student in data base")

# s1 = Student("John Deo",98.4,23)
# print(s1.name, s1.age, s1.marks)


# class Student:
#   college_name = "JNTUK"
#   name = "anonymous"

#   def __init__(self, name, marks):
#     self.name = name 
#     self.marks = marks 
  
#   def Hello(self):
#     print("Hello", self.name)

# s1 = Student("John", 95.3)
# s1.Hello()


# class Student:
#   def __init__(self, name, marks):
#     self.name = name
#     self.marks = marks 
  
#   def get_avg(self):
#     sum = 0
#     for val in self.marks:
#       sum += val
#     print("hi",self.name,"your avg score is:",sum/3)


# s1 = Student("John", [99, 94, 89])

# s1.get_avg()

# class Student:
#   def __init__(self, name, marks):
#     self.name = name
#     self.marks = marks

#   @staticmethod
#   def Hello():
#     print("hello, welcome")
  
#   def Get_Avg(self):
#     sum = 0
#     for val in self.marks:
#       sum += val
#     print("AVg", sum/3)

# s1 = Student("John Deo", [44,55,66])

# s1.Get_Avg()
# s1.Hello()

# class Car:

#   def __init__(self):
#     self.acc = False
#     self.brk = False
#     self.clutch = False

#   def start(self):
#     self.clutch = True
#     self.acc = True
#     print("car started....")

# c1 = Car()
# c1.start()

class Account:

  def __init__(self,bal, acc):
    self.bal = bal
    self.acc = acc
  
  #DEBIT

  def debit(self, amount):
    self.bal -= amount
    print("rs",amount,'was debited',"balance",self.bal)

  # CREDIT 
  def credit(self, amount):
    self.bal += amount
    print("rs",amount,'was Credited',"balance",self.bal)

acc1 = Account(10000, 231)
acc1.debit(100)
acc1.credit(900)