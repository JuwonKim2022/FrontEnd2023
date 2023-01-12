// 10-1. iterable
const array = [1,2,3];
for(const item of array){
  console.log(item);
};
array.values();
array.keys();
array.entries();

const obj = {0:4, 1:5 ,2:6};
for(const item in obj){
  console.log(item);
};
console.log(" ");

// 10-2
const iterator = array.values();
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().done);
while(true){
  const item = iterator.next();
  if(item.done) break;
  console.log(item.value);
}

// 10-3. generator
function* mulipleGenerator(){
  try{
    for(let i=0; i<10; i++){
      console.log(i);
      yield i ** 2;
    }
  }catch(error){
    console.log(error);
  }
  
}
const multiple = mulipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// mulitple.return(); 끝냄
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);

// 10-3. spread 연산자 (전개구문)
function add(a,b,c){
  return a+b+c;
}
const nums = [1,2,3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums));

function sum(first, second, ...nums){
  console.log(nums);
}
sum(1,2,0,1,2,4);

const fruits10 = ['🍏','🥝'];
const fruits11 = ['🍓','🍌'];
let arr = fruits10.concat(fruits11);
console.log(arr);
arr = [...fruits10, ...fruits11];
console.log(arr);

const john = {name: 'john', age: 20};
const updated = {
  ...john,
  job: 's/w',
};
console.log(john);
console.log(updated);

// 10-4. destructure (구조분해 할당)
const fruits = ['🍏','🥝','🍓','🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1,2];
const [x,y, z=0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji(){
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const juwon = {name:'juwon', age:36, job:'biology'};
function display({name, age, job}){
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(juwon);

const {name, age, job:occupation, pet = 'cat'} = juwon;
console.log(name);
console.log(age);
// console.log(job);
console.log(occupation);
console.log(pet);