class Counter{
  #value;
  constructor(startVal){
    if(isNaN(startVal) || startVal<0){
      this.#value = 0;
    }else{
      this.#value = startVal;
    }
  }

  get value(){
    return this.#value;
  }

  increment = () => {
    this.#value++;
  }
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);

