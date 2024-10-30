# SLICING 1-D ARRAY

# import numpy as np
# s = np.array([1,2,3,4,5,6,7,8,9,0])
# print(s[0:5])  # PRINTIG 0 TO 5 INDEX VALUES
# print(s[4:])  # PRINTING FROM INDEX 4 TO END INDEX
# print(s[-4:]) # PRINTING FROM NAGITIVE INDEX -4 TO 4 INDEXES
# print(s[0:7:3]) # PRINGTING FORM INDEX 0 TO 7 TH INDEX BY STEPPING 3
# print(s[:]) # PRINTING ALL THE INDEX VALUES IN THE ARRAY
# print(s[::-1]) # PRINTING THE ARRAY IN REVERSE ORDER


# # SLICING 2-D ARRAY

# import numpy as np
# TwoDArray = np.array(
#   [
#     [1,2,3,4,5],
#     [6,7,8,9,0]
#   ])
# print(TwoDArray[1,1:3]) # PRINTING 1ST INDEX ARRAY OF 1:3 INDEX VALUES
# print(TwoDArray[0,2:3]) # PRINTING 0ST INDEX ARRAY OF 2:3 INDEX VALUES
# print(TwoDArray[0:2, 2]) # PRINTING 1ST AND 2ED INDEX ARRAY OF 2 INDEX VALUE
# print(TwoDArray[0:2, 2:5]) # PRINTING 1ST AND 2ED INDEX ARRAY OF 2:5 INDEX VALUES

# 3-D ARRAY 

# import numpy as np

# ThreeDArray = np.array(
#   [
#     [
#       [1,2,3,4,5],
#       [6,7,8,9,0]
#     ],
#     [
#       [11,22,33,44,55],
#       [66,77,88,99,00]
#     ]
#   ])

# print(ThreeDArray[0,1,3:])  # PRINTING 0TH INDEX 1ST INDEX 3: END VALUES
# print(ThreeDArray[1,0,2:3])
# print(ThreeDArray[:2, :1, 2:5])