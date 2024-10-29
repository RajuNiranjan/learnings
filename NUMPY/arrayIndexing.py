import numpy as np

x = np.array([1,2,3])
print(x[2])


# 2-D ARRAY
import numpy as np

x = np.array([[1,2,3],[4,5,6]])

print(x[1,2])

# 3-D ARRAY 

import numpy as np

x = np.array(
  [
   [ [1,2,3],
    [4,5,6]],
    [
      [1,2,3],
      [4,5,6]
    ]
  ]
)
print(x[0,1,2])