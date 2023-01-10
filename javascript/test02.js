class Employee{

  constructor(name, department, payRate , period){
    this.name = name;
    this.department = department;
    this.payRate = payRate;
    this.period = period;
  }

  calPay = () => {
    return this.payRate * this.period;
  }
}

class FullTimeEmp extends Employee{
  static #PAY_RATE = 10000;
  constructor(name, department, period){
    super(name, department, period, FullTimeEmp.#PAY_RATE);
  }
}
class PartTimeEmp extends Employee{
  static #PAY_RATE = 8000;
  constructor(name, department, period){
    super(name, department, period, PartTimeEmp.#PAY_RATE );
  }
}

const juwon = new FullTimeEmp('주원','프로그래머',30);
const hyomi = new PartTimeEmp('효미','필라테스강사',20);
console.log(juwon.calPay());
console.log(hyomi.calPay());