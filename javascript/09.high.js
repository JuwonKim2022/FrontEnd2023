// 9-1. hof
const fruits = ['🍌', '🍓', '🍇', '🍓'];
//빙글빙글 돌면서 원하는거(콜백함수) 할 때
fruits.forEach(function(value, index, array) {
  console.log('-----------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});
fruits.forEach((value) =>  console.log(value));
console.log('=============================');
// 조건에 맞는 콜백함수 아이템 찾을 때
const item1 = {name: '🥛', price: 2};
const item2 = {name: '🍪', price: 3};
const item3 = {name: '🍙', price: 1};
const products = [item1, item2, item3, item2];
let found =  products.find((value) => value.name === '🍪');
console.log(found);
found =  products.findIndex((value) => value.name === '🍪');
console.log(found);
found =  products.some((value) => value.name === '🍪');
console.log(found);
found =  products.every((value) => value.name === '🍪');
console.log(found);
found =  products.filter((value) => value.name === '🍪');
console.log(found);
console.clear();
console.log('============================');

// 9-2. mapping
const nums =[1,2,3,4,5];
result = nums.map((item) => item*2);
console.log(result);
result = nums.map((item)=>{
  if(item%2===0){
    return item*2;
  }else{
    return item;
  }
});
console.log(result);
//flatmap
result = nums.map((item)=>[1,2]);
console.log(result);
result = nums.flatMap((item)=>[1,2]);
console.log(result);

result = ['dream','coding'].map((text)=>text.split(''));
console.log(result);
result = ['dream','coding'].flatMap((text)=>text.split(''));
console.log(result);
//sort
const texts = ['hi','abc'];
texts.sort();
console.log(texts);
const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
//0도바 작으면 a가 앞으로 정렬, 오름차순
numbers.sort((a,b)=>a-b);
console.log(numbers);
//reduce
result = [1,2,3,4,5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
result = [1,2,3,4,5,6].reduce((sum, value) => (sum += value), 0);
console.log(result);