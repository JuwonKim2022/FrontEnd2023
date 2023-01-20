N, K = map(int, input().split())
result = 0

while True:
  target = (N // K) * K
  result = result + (N - target)
  N = target

  if N < K:
    break

  result = result + 1
  N = N//K

result = result + (N-1)
print(result)