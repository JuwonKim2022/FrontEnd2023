// 9-1. basic
class Fruit{
  static MAX_FRUITS = 4;
  name;
  emoji;
  type = '과일';
  // 생성자
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  display(){
    console.log(`${this.name}: ${this.emoji}`);
  }
  static makeRandomFruit(){
    return new Fruit('banana', '🍌');
  }
};

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
apple.display();

// 9-2. static
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

Math.pow();
Number.isFinite(1);
console.log('-------');

// 9-3. field - #(접근제어자)
class Car {
  #name;
  #emoji;
  #type = '자동차';
  constructor(name, emoji){
    this.#name = name;
    this.#emoji = emoji;
  };
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
};
const kia = new Car('kia', '🚗');
console.log(kia);
console.log('-------');

// 9-4. getter, setter
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  };
  get fullName(){
    return `${this.lastName} ${this.firstName}`;
  };
  set fullName(value){
    console.log('set', value);
  }
};

const student = new Student('주원', '김');
console.log(student.firstName);
// console.log(student.fullName());
console.log(student.fullName);
student.fullName = '김 철수';
console.log('--------');

// 9-5. extends
class Animal{
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('먹자!');
  }
  sleep(){
    console.log('잔다');
  }  
}
class Tiger extends Animal{
  
}
class Dog extends Animal{
  constructor(color, ownerName){
    super(color);
    this.ownerName = ownerName;
  }
  play(){
    console.log('놀자~?');
  }
  //오버라이딩
  eat(){
    super.eat();
    console.log('강아지가 먹는다!');
  }
}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog('바둑이', '주언');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
