
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

# Acc1 = Account("11","123")
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

class Car:
  def __init__(self,type):
    self.type = type

  @staticmethod
  def Start():
    print("car started..")

  @staticmethod
  def stop():
    print("car stoped..")

class ToyotaCar(Car):
  def __init__(self, name,type):
    self.name = name
    super().__init__(type) 

c1 = ToyotaCar("prius","electrica")
print(c1.type)