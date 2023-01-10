// 8-1. array
let array = new Array(2);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5,6);
console.log(array);

const anotherArray = [1,2,3,4];
console.log(anotherArray);

array = Array.from(anotherArray);
console.log(array);

array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
console.log('===================');

//8-2. add
const fruits = ['🍌','🍎','🍇','🍊'];
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i]);
}

// 8-3. array method1
console.log(Array.isArray(fruits)); //배열인지 체크
console.log(fruits.indexOf('🍎')); //위치 찾기
console.log(fruits.includes('🍎')); //배열 안에 특정 아이템이 있나 확인
// 추가 
let length = fruits.push('🍏');    //뒤에 추가, 배열 자체를 새로 만듦
console.log(fruits);
console.log(length);
length = fruits.unshift('🍓');     //앞에 추가
console.log(fruits);     
console.log(length);
// 제거
let lastItem = fruits.pop();    //제일 뒤 제거
console.log(fruits);
console.log(lastItem);      
lastItem = fruits.shift();     //제일 앞 제거
console.log(fruits);
console.log(lastItem);    
// 중간에 추가 삭제
const deleted = fruits.splice(1,1);     //중간 위치,수량 제거....배열 자체 다시 만듦
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '🍏','🍎','🚗');     //중간 위치, 제거수량 없고.... 추가할 거 넣기
console.log(fruits);

// 8-4. araay method2
let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);
//여러배열 붙임
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
const arr4 = arr3.reverse();
console.log(arr4);
//중첩 배열을 일반 배열로
let arr5 = [0,[1,2,3],[4,[5,6]]];
console.log(arr5);
console.log(arr5.flat()); //1단계만 풀어줌
console.log(arr5.flat(2)); //전체 풀어줌
//특정값으로 배열 채우기
arr6 = arr5.flat(3);
arr6.fill(0);         //배열 자체를 수정
console.log(arr6);
arr6.fill('s', 1, 3);
console.log(arr6);
//배열 문자열로 합치기
let text = arr5.join();
console.log(text);

// 8-5. shallow
const pizza = {name: '🍕', price: 2};
const ramen = {name: '🍜', price: 3};
const sushi = {name: '🍣', price: 1};
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);