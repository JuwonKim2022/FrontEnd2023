// 7-1. basic
function add(num1,num2) {
  return num1 + num2;
}
const result = add(2,4);
console.log(result);

let lastName = 'Kim';
let firstName = 'Juwon';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// 7-2. memory
const sum = add;
console.log(sum(1,2));
console.log(add(1,2));

// 7-3. return
function print(num){
  if (num < 0){
    return;
  }
  console.log(num);
}
print(1);
print(-1);

// 7-4. parameters
function add2(a,b){
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a+b;
}
add2(1,2,3);

// 7-5. rest parameters
function sum2(...numbers) {
  console.log(numbers);
}
sum2(1,2,3,4,5,6,7,8);

// 7-6. expression (무명 함수)
let add3 = function (c,d){
  return c+d;
};
console.log(add3(1,2));

// 7-7. 화살표 함수
let add4 = (e,f) => {
  return e+f;
}
console.log(add4(8,9));
let add5 = (g,h) => g+h;
console.log(add5(7,6));