// 1.
function replace(array, from, to){
  return array.map(item => item===from ? to : item);
}
const arr1 = ['🍌', '🍓', '🍇', '🍓'];
console.log(arr1);
const result1 = replace(arr1, '🍓', '🥝');
console.log(result1);
console.log('===================');
// 2.
function count(array, pick){
  // return array.reduce((count, value)=>{
  //   if(value===pick){
  //     count++;
  //   }
  //   return count;
  // },0);
  return array.filter((value) => value===pick).length;
}
arr2 = [ '🍌', '🥝', '🍇', '🥝' ];
const result2 = count(arr2, '🥝');
console.log(result2);
console.log('===================');

// 3.
function match(array1, array2){
  return array1.filter((item) => array2.includes(item));
}
arr3 = ['🍌','🥝','🍇'];
arr4 = ['🍌','🍓','🍇','🍓'];
const result3 = match(arr3, arr4);
console.log(result3);

// 4. 5보다 큰 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result4 = nums.filter((num) => num > 5).reduce((avg, num, index, array) => avg + num/array.length, 0);
console.log(result4);

