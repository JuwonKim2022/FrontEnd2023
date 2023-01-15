data = dict()
data['apple'] = '사과'
data['banana'] = '바나나'
data['orange'] = '오렌지'
print(data)
if 'apple' in data:
  print("'사과'를 키로 가지는 데이터가 존재함")
print()
key_lst = data.keys()
val_lst = data.values()
print(key_lst)
print(list(key_lst))
print(val_lst)
print(list(val_lst))
print()
b = {
  '홍길동': 97,
  '이순신': 102
}
print(b)
print(b['이순신'])