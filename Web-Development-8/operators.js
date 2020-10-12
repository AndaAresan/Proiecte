// Arithmetic Operators
var a = 5;
var b = 3;

var c = a + b;
console.log(c);

var d = a - b;
console.log(d);

var e = a * b;
console.log(e);

var f = a / b;
console.log(f);

var g = a % b;
console.log(g);

var h = 10;
h++; // h = h + 1 or h += 1
console.log(h);

// String operators
var firstName = "Cosmin";
var lastName = "Pruteanu";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Comparison operators
a = 10;
b = 7;
console.log(a < b); // false
console.log(a > b); // true
console.log(a >= 10); // a is equal or bigger than 10 which is true
console.log(a == b); // a is equal to b => false
console.log(a == "10"); // true
console.log(a === "10"); // false
console.log(a !== b); // is a different from b => true

// Logical operators
var i = false;
console.log(!i);
console.log(true && true && false); // false "and" operator
console.log(true || true || false); // true "or" operator