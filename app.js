//1
for (let i = 6; i < 100; i++) {
  //   console.log(i);
}

//2
let index = 0;
while (index < 50) {
  //   console.log(index);
  index++;
}

//3
let names = ["John", "Jane", "Mark", "Bob", "Mary"];
names.pop();
// console.log(names);
// names.push("Natia");
// console.log(names);

//4

let numbers = [];
// console.log(numbers.length, "empty array");
for (let i = 1; i < 100; i++) {
  numbers.push(i * i);
}

// console.log(numbers, "array with numbers");

//5
let numbers2 = [5, 6, 7, 8, 9, 60, 50, 234];
let numbers3 = [5, 6, 7, 8, 9, 60, 50, 234, 60, 50, 234, 60, 50, 234];
let sum = 0;
let sum1 = 0;

for (let i = 0; i < numbers2.length; i++) {
  sum = sum + numbers2[i];
}

function getName() {
  console.log("this function");
  function getLastName() {
    console.log("this is nested function");
    function getFullName() {
      console.log("this is nested nested function");
    }
    getFullName();
  }
  getLastName();
}

getName();

function getSum(a, b) {
  return a + b;
}
let input1 = 5;
let input2 = 6;
getSum(input1, input2);
getSum(50, 60);
console.log(getSum(5, 6));
console.log(getSum(50, 60));

getNamesToLowerCase("NATIAA");

function getNamesToLowerCase(name) {
  let newName = name.toLowerCase();
  if (newName.length > 5) {
    return newName;
  } else {
    return "name is too short";
  }
}

getNamesToLowerCase("Jane");
getNamesToLowerCase("John");
getNamesToLowerCase("Anastasia");

console.log(getNamesToLowerCase("ANASTASIA"));

const getNamesToLowerCase2 = (name) => {
  let newName = name.toLowerCase();
  if (newName.length > 5) {
    return newName;
  } else {
    return "name is too short";
  }
};
getNamesToLowerCase2("ANASTASIA");

// const funcqciiSaxeli = () => {};
// function funcqciiSaxeli() {}

const getEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return number;
  }
};

console.log(getEvenOrOdd(4));
console.log(getEvenOrOdd(5));

let numbers4 = [5, 6, 7, 8, 9, 60, 50, 234, 60, 50, 234, 60, 50, 234, 6];
let filteredNumbers = numbers4.filter((item) => item > 6);
let multiplyArr = numbers4.map((item) => item * 2);
let multiplyArr2 = numbers4.map(function (item) {
  return item * 2;
});

console.log(multiplyArr);
