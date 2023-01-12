// 1. set
const set = new Set([-1,2,3]);
console.log(set);
console.log(set.size);
console.log(set.has(-1));
console.log(set.has(6));
set.forEach((item) => console.log(item));
for(const value of set.values()){
  console.log(value);
}
set.add(6);
console.log(set);
set.add(6);
console.log(set); //중복 안됨
set.delete(6);
console.log(set);
set.clear();
console.log(set);

const obj1 = {name: '🍎', price: 8};
const obj2 = {name: '🍌', price: 5};
const objs = new Set([obj1, obj2]);
console.log(objs);

obj1.price = 10;
objs.add(obj1);
console.log(objs);

const obj3 = {name: '🍌', price: 5};
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);


// 11-2. map
const map = new Map([
  ['key1','🍊'],
  ['key2','🍌'],
])
console.log(map);
console.log(map.size);
console.log(map.has('key1'));
console.log(map.has('key6'));
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
map.set('key3','🥝');
console.log(map);
map.delete('key3');
console.log(map);
map.clear();
console.log(map);
console.log('======================');
// map과 object 차이
const key = {name:'milk', price:10};
const milk = {name:'milk', price:10, description: '맛있는우유'};
const obj4 = {
  [key]: milk,
};
console.log(obj4);

const map2 = new Map([[key,milk]]);
console.log(map2);

console.log(obj4[key]);
console.log(map2.get(key));
console.log();

// 11-3. symbol
const map3 = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2);
console.log();

const map4 = new Map();
const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'hello');
console.log(map.get(key4));
console.log(key3 === key4);
console.log();
//Symbol.for
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key3));
console.log();
const obj = { [k1]: 'hello', [Symbol('key')]:1};
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);