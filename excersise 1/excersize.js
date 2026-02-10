//Exercise 1 
let user = {
  name: "John",
  years: 30
};

var { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin); // John 30 false

//Exercise 2
let ourPlanetName = "Earth";
let currentVisitorName = "John";

//Exercise 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}
//sayHi() // Uncaught ReferenceError ReferenceError: alert is not defined.

//Exercise 4
let users = {};
users.name = "John";
users.surname = "Smith";
users.name = "Pete";
delete users.name;
console.log(users);

//Exercise 5
const user5 = {
  name: "John"
}
user5.name = "Pete"
console.log(user5);

//Exercise 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
let sum = 0;

for (let salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);

//Exercise 7
result = (a + b < 4) ? 'Below' : 'Over';

//Exercise 8
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';

