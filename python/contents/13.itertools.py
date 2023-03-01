from itertools import permutations

data1 = ['A','B','C']
result1 = list(permutations(data1,3))
print(result1)

from itertools import combinations

data2 = ['A','B','C']
result2 = list(combinations(data2,2))
print(result2)
