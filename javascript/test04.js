// 1.
function replace(array, from, to){
  const replaced = Array.from(array);
  for(let i=0; i<replaced.length; i++){
    if(replaced[i] === from){
      replaced[i] = to;
    }
  }
  return replaced;
}
const arr1 = ['🍌', '🍓', '🍇', '🍓'];
console.log(arr1);
const result1 = replace(arr1, '🍓', '🥝');
console.log(result1);
console.log('===================');
// 2.
function count(array, pick){
  let num = 0;
  const replaced = Array.from(array);
  for(let i=0; i<replaced.length; i++){
    if(replaced[i] === pick){
      num++;
    }
  }
  return num;
}
arr2 = [ '🍌', '🥝', '🍇', '🥝' ];
const result2 = count(arr2, '🥝');
console.log(result2);
console.log('===================');

// 3.
function match(array1, array2){
  const result = [];
  for(let i=0; i<array1.length; i++){
    if(array2.includes(array1[i])){
      result.push(array1[i]);
    }
  }
  return result;
}
arr3 = ['🍌','🥝','🍇'];
arr4 = ['🍌','🍓','🍇','🍓'];
const result3 = match(arr3, arr4);
console.log(result3);
