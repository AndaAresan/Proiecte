console.log("I'm in another file");

// Declaring variables
var a = 5;
console.log(a);
a = 8;
console.log(a);
var b = 10;
var c = a + b;
console.log("c=", c);

// Data types
var x = 10;
var y = 1.5;
var z = "John";
var w = true;

var list = [1, 2, 3, 4, 5];
var three = list[2]; // 3
var person = {
  age: 30,
  hairColor: "#000000",
  eat: function (food) {
    console.log("I am eating: ", food);
  },
};

console.log(person.age);
person.eat("Sandwich");

// functions
function multiply(a, b) {
  return a * b;
}
console.log(multiply(12, 6));

var j = multiply(123, 14);
console.log(j);

console.log(multiply(j, 100));

// we need b to be different from 0
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("You can't divide with 0");
  }
}

console.log(divide(12, 0));