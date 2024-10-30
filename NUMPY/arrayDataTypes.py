# DATA TYPE IN NUMPY

#------> INTEGER          ------> i
#------> BOOLEAN          ------> b
#------> UNSIGNED         ------> u
#------> FLOAT            ------> f
#------> COMPLEX FLOAT    ------> c
#------> TIME DETLA       ------> m
#------> DATE TIME        ------> M
#------> OBJECT           ------> O
#------> STRING           ------> S
#------> UNICODE STRING   ------> U
#------> MEMORY           ------> V

# import numpy as np
# s = np.array([1,2,3,4,5,6])
# print(s.dtype)

# import numpy as np
# s = np.array(["apple",'banana','cherry'])
# print(s.dtype)


# import numpy as np
# s = np.array([True, False])
# print(s.dtype)

# import numpy as np
# s = np.array([1,2,3,4,5,6], dtype='S')
# print(s)
# print(s.dtype)

# import numpy as np
# s = np.array([1,2,3,4], dtype='i4')
# print(s.dtype)
# print(s)

import numpy as np
s = np.array([1.1,2.2,3.3,4.4])
print(s.dtype)
print(s)
s1 = s.astype("i")
print(s1.dtype)
print(s1)