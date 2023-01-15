#while
i = 1
result = 0

while i <= 9:
  result = result + i
  i = i + 1
print(result)
print()  

#for
array = [9,8,7,6,5]
for x in array:
  print(x)
print()

#range
result1 = 0
for j in range(1,10):
  result1 += i
print(result1)
print()

#continue
result2 = 0
for k in range(1,10):
  if k%2 ==0:
    continue
  result2 += k
print(result2)
print() 

#break
l = 1
while True:
  print("현재 i값 : ", l)
  if l == 5:
    break
  l += 1
