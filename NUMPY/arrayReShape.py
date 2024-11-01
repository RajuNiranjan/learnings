# ARRAY RE-SHAPE


import numpy as np
s = np.array([1,2,3,4,5,6,7,8,9,0,22,22])

TwoDArray = s.reshape(2,6)
print(TwoDArray)
print(TwoDArray.ndim)
print(TwoDArray.shape)

ThreeDArray = s.reshape(2,2,3)
print(ThreeDArray)
print(ThreeDArray.ndim)
print(ThreeDArray.shape)