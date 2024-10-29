import numpy as np
x = np.array([1,2,3,4,5,6,7,8])
print(x)
print(type(x))

import numpy as np
y = np.array((1,2,3,4))
print(y)
print(type(y))

# 0 DIMENTIONAL ARRAY 

import numpy as np

x =np.array(42)
print("0-D Array -->",x)
print("no.of dimentions --->",x.ndim)


# UNI DIMENTIONAL or 1 DIMENTIONAL ARRAY 

import numpy as np

x = np.array([1,2,3])
print("1-D Array -->",x)
print("no.of dimentions --->",x.ndim)



# 2 DIMENTIONAL ARRAY

import numpy as np

x = np.array([[1,2,3], [5,6,7]])
print("2-D Array -->",x)
print("no.of dimentions --->",x.ndim)



# 3 DIMENTIONAL ARRAY

import numpy as np

x = np.array([[1,2,3], [5,6,7], [8,9,0]])
print("3-D Array -->",x)
print("no.of dimentions --->",x.ndim)


# 3 D with 2 D

x = np.array([[[1,2,3], [5,6,7]],[[1,2,3], [5,6,7]]])
print("3 D with 2 D Array -->",x)
print("no.of dimentions --->",x.ndim)


