# ARRAY JOINING 

# JOINING OF 1-D 

# import numpy as np

# one = np.array([1,2,3,4])
# two = np.array([5,6,7,8])

# op = np.concatenate((one,two))

# print(op)


# JOINING OF 2-D 


import numpy as np

# one = np.array([[1,2],[3,4]])
# two = np.array([[5,6],[7,8]])

one = np.array([1,2,3,4])
two = np.array([5,6,7,8])

# op = np.concatenate((one, two),axis=1)
# print(op)

op = np.stack((one, two),axis=1)
print(op)

op = np.hstack((one, two))
print(op)