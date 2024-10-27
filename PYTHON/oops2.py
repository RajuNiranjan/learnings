
# # DELETE METHOD //////////////////////
# class Student:
#   def __init__(self, name):
#     self.name = name

# s1 = Student("John")
# print(s1.name)

# del s1.name
# print(s1.name)


# class Account:
#   def __init__(self, acc_no, acc_pass):
#     self.acc_no = acc_no
#     self.__acc_pass = acc_pass
  
#   def reset_pass(self):
#     print(self.__acc_pass)

# Acc1 = Account("11","12 3")
# print(Acc1.reset_pass())

# class Person:
#   __name = "John Deo"

# P1 = Person()

# SINGL INHERITANCE ////////////////////////////////////
# class Car:
#   @staticmethod
#   def Start():
#     print("car started..")
  
#   @staticmethod
#   def Stop():
#     print("car stopped..")

# class ToylotaCar(Car):
#   def __init__(self, name):
#     self.name = name 

# c1 = ToylotaCar("fortuner")
# c2 = ToylotaCar("prius")

# print(c1.name)
# print(c2.name)

# # MULTI LEVEL INHERITANCE

# class Car:
#   @staticmethod
#   def Start():
#     print("car started...")
  
#   @staticmethod
#   def Stop():
#     print("car stoped..")

# class ToyotaCar(Car):
#   def __init__(self,name):
#     self.name=name

# class Fortuner(ToyotaCar):
#   def __init__(self, type):
#     self.type = type

# c1 = Fortuner("desel")
# print(c1.Start())

# # MULTIPLE INHERITANCE

# class A:
#   varA = "Welcome to class A"

# class B:
#   varB = "Welcome to class B"

# class C(A, B):
#   varC = "Welcom to class C"

# c1 = C()

# print(c1.varC)
# print(c1.varB)
# print(c1.varA)

# SUPER METHOD /////////////////////////////////////////////////

# class Car:
#   def __init__(self,type):
#     self.type = type

#   @staticmethod
#   def Start():
#     print("car started..")

#   @staticmethod
#   def stop():
#     print("car stoped..")

# class ToyotaCar(Car):
#   def __init__(self, name,type):
#     self.name = name
#     super().__init__(type) 

# c1 = ToyotaCar("prius","electrica")
# print(c1.type)


# # CLASS METHOD ////////////////////////////////

# class Person:
#   name = 'anonymus'

#   # def changeName(self, name):
#   #   self.__class__.name = name 

#   @classmethod
#   def changeName(cls, name):
#     cls.name = name

# p1 =Person()
# p1.name = "john deo"
# print(p1.name)


# class Student:
#   def __init__(self, py, che, math):
#     self.py = py
#     self.che = che
#     self.math = math

#   @property
#   def persentage(self):
#     return  str((self.py + self.che + self.math)/3) + "%"
  
# s1 = Student(89,80,99)
# print(s1.persentage)

# s1.py = 98
# print(s1.persentage)

# a = int(input("enter a value: "))
# b = int(input("enter b value: "))

# print("ADD",a.__add__(b))
# print("SUB",a.__sub__(b))
# print("MULLT",a.__mul__(b))
# print("TRUE_DIV",a.__truediv__(b))
# print("MOD",a.__mod__(b))

# class Complex:
#   def __init__(self, real, img):
#     self.real = real
#     self.img = img
  
#   def showNum(self):
#     print(self.real, "i +", self.img,"j")
  
#   def __add__(self, num2):
#     newReal = self.real + num2.real
#     newImg = self.img + num2.img
#     return Complex(newReal, newImg)
  
#   def __sub__(self, num2):
#     newReal = self.real - num2.real
#     newImg = self.img - num2.img
#     return Complex(newReal, newImg)
  
#   def __mul__(self, num2):
#     newReal = self.real * num2.real
#     newImg = self.img * num2.img
#     return Complex(newReal, newImg)
  
#   def __truediv__(self, num2):
#     newReal = self.real / num2.real
#     newImg = self.img / num2.img
#     return Complex(newReal, newImg)

# n1 = Complex(1,3)
# n1.showNum()

# n2 = Complex(9,8)
# n2.showNum()

# n3 = n1 + n2
# n3.showNum()

# n4 = n1 - n2
# n4.showNum()


# n5 = n1 * n2
# n5.showNum()


# n6 = n1 / n2
# n6.showNum()

# class Circle:
#   def __init__(self, radius):
#     self.radius = radius
  
#   def Area(self):
#     return (22 / 7) * self.radius ** 2
  
#   def Perimeter(self):
#     return (22 / 7) * self.radius

# c1 = Circle(31)
# print(c1.Area())
# print(c1.Perimeter())

# class Employee:
#   def __init__(self, role, dept, salary):
#     self.role = role
#     self.dept = dept 
#     self.salary = salary

#   def ShowDetails(self):
#     print("ROLE", self.role)
#     print("DEPT", self.dept)
#     print("ROLE", self.salary)

# class Engineer(Employee):
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#     super().__init__("Engineer","IT",55000)

# E1 = Employee("Front End Developer", "Software", 25000)
# E1.ShowDetails()

# eng = Engineer("John Deo", 23)
# eng.ShowDetails()