import math

a = 21
b = 14

# 최대공약수 = gcd
print(math.gcd(21,14))

# 최소공배수 = lcm
def lcm(a,b):
  return a*b // math.gcd(a,b)
print(lcm(a,b))

print(math.lcm(3,8))