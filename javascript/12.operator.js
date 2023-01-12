// 12-1. logical
const obj1 = {name: '🐶'};
const obj2 = {name: '🐱', owner: 'John'};

if(obj1 && obj2){
  console.log('둘다 진실!');
}
//단축평가
let result1 = obj1 && obj2;
console.log(result1);
let result2 = obj1 || obj2;
console.log(result2);

function changeOwner(animal) {
  if(!animal.owner){
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if(animal.owner){
    throw new Error("주인이 이미 있음");
  }
  animal.owner = '새로운주인!';
}
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);
console.log();
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);
console.log();

let item;
const price = item && item.price;
console.log(price);
function print(message = 'Hi') {
  const text = message || 'Hello';
  console.log(text);
}
print();
function print(message = 'Hi') {
  console.log(message);
}
print();
print(undefined);
print(null);
print(0);
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);

// 12-2. optional operator
let item1 = {price: 10000000};
const price1 = item1?.price;
console.log(price1);
console.log();
let obj5 = {name: '🐶', owner: {name: 'john'}};
const ownerName = obj5 && obj5.owner && obj5.owner.name;
console.log(obj5);

// 12-3. nullish
let num1 = 0;
console.log(num1 || '-1');
console.log(num1 ?? '-1');