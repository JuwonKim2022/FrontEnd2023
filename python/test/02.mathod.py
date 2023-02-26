# Built-in function

# abs()

# all()

# any()

# dir()

# format(숫자, 표현양식)
a1 = format(100000000, ',') #화폐표시
print(a1)
a2 = format(100000000, 'e') #지수표시
print(a2)
a3 = format(100000000, 'x') #16진수표시
print(a3)
a4 = format(10000, '!>020,.4f') #!채우기+왼쪽부터+부호+20자리+콤마찍음+소수점4자리
print(a4)

# filter
def twoDef(value):
  if value % 2 == 0:
    return True
  else:
    return False

b1 = list(filter(twoDef, range(20)))
print(b1)

b2 = list(filter(lambda x: x%2==0, range(20)))
print(b2)

b3 = list(i for i in range(20) if i % 2 == 0)
print(b3)