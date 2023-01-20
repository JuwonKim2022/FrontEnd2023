print((lambda a,b: a+b)(3,7))

array = [('홍길동', 50),('이순신', 32),('아무개', 74)]
print(sorted(array, key=lambda x: x[0]))
print(sorted(array, key=lambda x: x[1]))

list1 = [1,2,3,4,5]
list2 = [6,7,8,9,10]
result = map(lambda a,b: a+b, list1, list2)
print(list(result))

list3 = [1,2,3]
list4 = [10,20,30]
result = map(lambda a,b: a+b,list3,list4)
print(list(result))