#매번 계산해야해서 효율성 떨어짐
def fib (n):
    if (n <= 1):
        return n
    else:
        return fib(n-1) + fib(n-2)
    
for i in range(11):
    print(fib(i), end=' - ')

print()

#효율성 올림
def fib2(n):
    f = [0]*(n+1)
    if (n>0):
        f[1] = 1
        for i in range(2, n+1):
            f[i] = f[i-1] + f[i-2]
    return f[n]

for i in range(11):
    print(fib2(i), end=' - ')

print()