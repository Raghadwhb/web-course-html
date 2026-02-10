// Exercise 1
function filterRange(numbers, minValue, maxValue) {
  return numbers.filter(number => number >= minValue && number <= maxValue);
}

let inputNumbers = [5, 3, 8, 1];
let numbersInRange = filterRange(inputNumbers, 1, 4);

//alert(numbersInRange); // 3,1
//alert(inputNumbers);   // 5,3,8,1


// Exercise 2
let johnUser = { name: "John", age: 25 };
let peteUser = { name: "Pete", age: 30 };
let maryUser = { name: "Mary", age: 28 };

let usersArray = [johnUser, peteUser, maryUser];

let namesArray = usersArray.map(user => user.name);

alert(namesArray); // John, Pete, Mary


// Exercise 3
function getAverageAge(users) {
  return users.reduce((sumOfAges, user) => {
    return sumOfAges + user.age;
  }, 0) / users.length;
}

let averageJohn = { name: "John", age: 25 };
let averagePete = { name: "Pete", age: 30 };
let averageMary = { name: "Mary", age: 29 };

let usersForAverage = [averageJohn, averagePete, averageMary];

alert(getAverageAge(usersForAverage)); // 28
