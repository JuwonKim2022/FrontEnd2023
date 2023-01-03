console.log('Hi World');

// 4-1. Variable
let a = 0;
console.log(a);
a=1;
console.log(a);
let b;
console.log(b);
b=2;
console.log(b);

// 4-2. Naming
let redApple;

// 4-3. NumberType
let integer = 123;
let negative = -123;
let double = 1.23;
console.log(integer);
console.log(negative);
console.log(double);

console.log(123/0);
console.log(123/-0);
console.log(123/'text');

// 4-4. String
let string = '안녕하세요';
string = '안녕!\n엘리야\t\t내 이름\\'
console.log(string);

let id = '엘리';
let greetings = "'안녕!, " + id + "\n즐거운 하루 보내세요!'";
console.log(greetings);

// 4-5. Empty
console.log(typeof null);
console.log(typeof undefined);

// 4-6. Object
let apple = {
  name : 'apple',
  color : 'red',
  display : '🍎',
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

// 4-7. const
const TEXT = 'hello';
console.log(TEXT);
const ORANGE = {
  name : 'orange',
  color : 'orangeColor',
  display : '🍊',
};
console.log(ORANGE);

// 4-8. typeof
let variable;
variable = '';
console.log(typeof variable);