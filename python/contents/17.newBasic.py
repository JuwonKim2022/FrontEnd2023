# 1강
print('====1강====')
print('hello world')

# 2강
print('====2강====')
print(111)
print(123 + 456)
print('hello. ' * 4)
# 2-1 변수
name = 'Kim John'
print(name)
print(name[0])
print(name[2])

# 3강
print('====3강====')
#3-1 리스트
oldCar = ['K5', 'white', [50000, 60000]]
print(oldCar)
print(oldCar[0])
print(oldCar[1])
print(oldCar[2])
oldCar[1] = 'black'
print(oldCar)
#3-2 리스트 문법
# oldCar.sort()     #자료정렬
# oldCar.reverse()  #자료역으로 정렬
# oldCar.pop()      #자료마지막 꺼내기

# 4강
print('====4강====')
#4-1 딕셔너리
midCar = {
  'carName':'BMW', 
  'carModel':'520d', 
  'carPrice':70000
}
print(midCar)
print(midCar['carName'])
midCar['carName'] = 'Benz'
print(midCar)

# 5강
print('====5강====')
#5-1 조건문
inventory = 10
if inventory >= 1:
  print('지금 주문 가능합니다.')
else:
  print('재고가 부족합니다.')  
#5-2 뭐 안에 뭐 있는지 확인
oldCarInv = ['Kia', 'BMW', 'Benz']
if 'Kia' in oldCarInv:
  print('차종이 있습니다.')
else:
  print('차종이 없습니다.')
  
# 6강
print('====6강====')
#6-1 반복문
for i in range(0,10):
  print('반복합니다')
#6-2 자료 하나씩 뽑기
for i in oldCarInv:
  print(i)

# 7강
print('====7강====')
#7-1 함수
def greed():
  print('안녕하세요. 김주원입니다. 잘 부탁드립니다.')

greed()
greed()
#7-2 함수  마법의 모자
def add(a,b,c):
  print(a+b+c)

add(1,2,3)

def sub():
  return 10

print(sub())  