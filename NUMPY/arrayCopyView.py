# ARRAY COPY VS VIEW 


# COPY 
import numpy as np
s = np.array([1,2,3,4,5])
s1 = s.copy()
s[2] =8
print(s)
print(s1)

# VIEW 

import numpy as np
s = np.array([1,2,3,4,5])
s1 = s.view()
s[0]=6
print(s)
print(s1)