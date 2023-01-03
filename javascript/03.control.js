// 6-1. if
let fruit = 'orange';
if(fruit === 'apple'){
  console.log('🍎');
}else{
  console.log('🍊');
};

// 6-2. ternary operator (삼항조건연선자)
fruit === 'apple' ? console.log('🍎') : console.log('🍊');

let emoji = fruit === 'appple' ? '🍎': '🍊';
console.log(emoji);

// test1
let num = 2;

if (num%2 == 0){
  console.log('👍');
} else {
  console.log('👎');
};

(num%2 == 0) ? console.log('👍') : console.log('👎');

// 6-3. switch
let day = 6;
let dayName;
switch(day){
  case 0: 
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당 요일 없음');
}
console.log(dayName);

// 6-4. for
for(let i = 0; i<5; i++){
  for(let j = 0; j<3; j++){
    console.log(i, j);
  }
}

// 6-5. while
let numA = 5;
while (numA >= 0){
  console.log(numA);
  numA--;
}

// 6-6. logical

