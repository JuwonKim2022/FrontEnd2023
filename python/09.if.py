import sys

x = 45;

if x >= 70:
  print("성적이 70점 이상입니다.")
  if x >= 90:  
    print("성적이 우수합니다.")
elif x>=50:  
  print("성적이 50점 이상입니다.")
else:
  print("성적이 저조합니다.")  
print("프로그램을 종료합니다.")  

score = int(input())
if score >= 90:
  print("학점 A")
elif score >= 80:
  print("학점 B")  
elif score >= 70:
  print("학점 C")  
elif score >= 60:
  print("학점 D")
else:
  print("학점 F")    
print()

if True or False:
  print("Yes")
print()

#pass
z = 50
if z >= 50:
  pass
else:
  print("50미만의 수입니다.")
print("프로그램 종료")
print()  

# 조건문 간소화
val1 = 85
if val1 >= 80: result = "80이상"
else: result = "80미만"
print(result)

val2 = 85
result1 = "성공" if val2 >= 80 else "실패"
print(result1)

# 값 범위
g = 9.8
if 0<g<10:
  print("g는 중력값입니다.")