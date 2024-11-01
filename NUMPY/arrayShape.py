# SHAPE OF ARRAY 

# import numpy as np
# s = np.array([[1,2,3,4],[6,7,2,9]])
# print(s.shape)

import numpy as np
s = np.array([[1,2,3,4]], ndmin=5)
print(s.shape)
print(s.ndim)
print(s)