//Exercise 1
const checkAge = age =>
  age > 18 ? true : confirm('Do you have your parents permission to access this page?');

//Exercise 2
const pow = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;
  return result;
};

//Exercise 3
const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//Exercise 4
let calculator = {
  read() {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter second number", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Exercise 5
const min = (a, b) => a < b ? a : b;


