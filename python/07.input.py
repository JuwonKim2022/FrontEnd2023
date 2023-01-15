n = int(input())
data1 = map(int, input().split())
print(data1)
data2 = list(map(int, input().split()))
data2.sort(reverse=True)
print(data2)
print()

a,b,c = map(int, input().split())
print(a,b,c)
print(a)

# 속도 빠르게 입력받기
import sys

data = sys.stdin.readline().rstrip()
print(data)