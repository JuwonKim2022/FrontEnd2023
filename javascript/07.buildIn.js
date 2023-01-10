// 1. wrapper
const number = 123;
console.log(number);
console.log(number.toString());

const text = 'text';
console.log(text);
console.log(text.length);
text.trim();
console.log('------------');

// 2. global
console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));

const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

const part = '드림코딩.com';
console.log(encodeURIComponent(part));
console.log('------------');

// 3. boolean
const isTrue = new Boolean(true);
console.log(isTrue.valueOf());
// 4. number
const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
//숫자확인
if(num1 === Number.NaN){ }
if(Number.isNaN(num1)){ }
//지수표기법
const num3 = 102;
console.log(num3.toExponential());
//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));
//원하는 자릿수 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));

console.log(Number.EPSILON);

function isEqual(original, expexted){
  return original === expexted;
}
const num = 0.1 + 0.2 - 0.2;
console.log(isEqual(1,1));
console.log(isEqual(0.1 , 0.1));
console.log(isEqual(num, 0.1));
// 5. math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-10));
//올림
console.log(Math.ceil(1.4));
//내림
console.log(Math.floor(1.4));
//반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));
//정수만 반환
console.log(Math.trunc(1.5332));
//최대값
console.log(Math.max(1,3,2));
//최소값
console.log(Math.min(1,3,2));
//거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3,2));
//제곱근
console.log(Math.sqrt(9));
//랜덤값 반환
console.log(Math.random());

//6. String
const testObj = new String('Hello World');
const text1 = 'Hello World';
console.log(testObj);
console.log(text1);

console.log(text1[0]);
console.log(text1.charAt(0));
console.log(text1.length);
console.log(text1.indexOf('l'));
console.log(text1.lastIndexOf('l'));
console.log(text1.includes('H'));
console.log(text1.startsWith('He'));
console.log(text1.endsWith('ld'));
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());
console.log(text1.substring(1, 3));
console.log(text1.slice(2));
console.log(text1.slice(-2));
//공백제거
const space = '         space    ';
console.log(space);
console.log(space.trim());

const longText = 'Ge,t to the la,st po, int';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
console.log(longText.split(','));
console.log(longText.split(', '));
//7. Date
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-12T12:13:14'));
console.log(Date.now());
console.log(Date.parse('2022-12-12T12:13:14'));

const now = new Date();
now.setFullYear(2023);
// now.setMonth(0); //0부터 시작, 0이 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());    //ISO 8601형식
console.log(now.toLocaleString('en-US')); //en-US
console.log(now.toString('ko-KR'));