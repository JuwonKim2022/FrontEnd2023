function iterate(max, action){
  for(let i=0; i<=max; i++){
    action(i);
  }
}

function printEle(num){
  console.log(num);
}
function doubling(num){
  console.log(num*2);
}

iterate(3, printEle);
console.log('--');
iterate(3, doubling);

setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행될거에요.');
}, 3000);