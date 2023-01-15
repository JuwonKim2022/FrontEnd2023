# 리스트 초기화
a = [1,2,3,4,5,6,7,8,9]
print(a)
print(a[3])
print(a[-2])
a[0]=10
print(a)
print(a[1:4])
print()

n = 10
b = [0]*n
print(b)
print()

array1 = [i for i in range(10)]
array2 = [i for i in range(20) if i % 2 == 1]
array3 = [i*i for i in range(1,10)]
array4 = [[0]*4 for _ in range(3)]
print(array1)
print(array2)
print(array3)
print(array4)
print()
#리스브 특정갑 제거(앞에 하나만)
a=[0,1,2,1,3,4,5,5,5]
a.remove(1)
print("값이 1인 데이터 삭제 : ", a)
remove_set = {3,5}
newArr = [i for i in a if i not in remove_set]
print("특정값을 제거한 배열 : ", newArr)