// 0부터 10까지 숫자의 2배를 순회하는 이터레이터 만들기
const multiple = {
  [Symbol.iterator](){
    const max = 10;
    let num = 0;
    return {
      next(){
        return {value: num++ * 2, done: num > max}
      }
    }
  }
}
for(const num of multiple){
  console.log(num);
}
// upgrade 함수화
function makeIterable(initialVal, maxVal, callback){
  return{
    [Symbol.iterator](){
      let num = 0;
      return {
        next(){
          return {value: callback(num++), done: num > maxVal}
        }
      }
    }
  }
}
const multiple2 = makeIterable(0, 10, (n) => n*2);
for(const num of multiple2){
  console.log(num);
}

// 구조분해 문제
const prop = {
  name: 'Button',
  style: {
    size: 20,
    color: 'black',
  },
}
function changeColor({styles:{color}}) {
  console.log(color);
}
changeColor(prop);