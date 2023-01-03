// 5-1. expression
let b; //선언문
b = 2; //표현식, 할당문
console.log(b);

// 5-2. arithmetic.js
console.log(5+2);
console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(5**2);
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1;
console.log(text);

// 5-3. unary operators (단항연산자)
let a = 5;
a = -a;
console.log(a);
a = -a;
console.log(a);
let boolean = true;
console.log(boolean);
console.log(!boolean);

// 5-4. assignment (할당연산자)
let d = 1;
d = d+2;
d += 2;
console.log(d);

// 5-5. increment & decrement
let e= 0;
console.log(e);
e++;
console.log(e);
e--;
console.log(e);

console.clear();
f = 0;
let g = f++;
console.log(g);

h = 0;
let i = ++h;
console.log(i);

// 5-6. relational (비교연산자)
console.log(2>3);
console.log(2<3);

// 5-7. priority
let x = 2;
let y = 4;
let result = x++ + y * 4;
console.log(result);
console.log(x);

// 5-8. equality (동등비교연산자)
const obj1 = {
  name : 'js',
}
const obj2 = {
  name : 'js',
}
console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);