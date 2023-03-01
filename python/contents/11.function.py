# def 함수명(매개변수):
#   실행할 코드
#   return 반환값
print('====함수 기본===')
def add(a,b):
  return a+b
print(add(3,7))

def substract(a,b):
  print("값 : ", a-b)
substract(7,2)

#global keyword
print('====글로벌 키워드===')
a = 0

def func():
  global a
  a += 1

for i in range(10):
  func()

print(a)

print('====배열은 글로벌 키워드 필요 없음===')
array = [1,2,3,4,5]

def func1():
  array.append(6)
  print(array)

func1()

#여러값 한번에 반환 가능
print('====함수에서 여러값 반환 가능===')
def operator(a,b):
  add_var = a+b
  sub_var = a-b
  multi_var = a*b
  div_var = a/b
  return add_var, sub_var, multi_var, div_var

a,b,c,d = operator(7,3)
print(a,b,c,d)