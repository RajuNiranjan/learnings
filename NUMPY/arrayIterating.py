# NUMPY ARRAY ITERATING


# ITERATE THE 1-D 

# import numpy as np

# oneD = np.array([1,2,3])
# for i in oneD:
#   print(i)

# 2-D 
# import numpy as np
# twoD = np.array([[1,2,3],[4,5,6]])

# # for i in twoD:
# #   print(i)

# for i in twoD:
#   for j in i:
#     print(j)


# 3-D 

# import numpy as np

# threeD = np.array([[[1,2,3],[4,5,6],[6,7,8]]])

# for i in threeD:
#   for j in i:
#     for k in j:
#       print(k)


# ITERATE THE ARRAY USING nditer() FUNTION

import numpy as np

threeD = np.array([[[1,2,3],[4,5,6],[6,7,8]]])

for i in np.nditer(threeD):
  print(i)
