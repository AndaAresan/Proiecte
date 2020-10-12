var numbers = [-2, 10, 2, 4, -6, 3];

console.log(numbers)

var positive = numbers.filter(myFunction);

document.getElementById("arrays").innerHTML = positive;

console.log(positive)

function myFunction(value, index, array) {
  return value > 0;
};

// reduce primeste 2 parametrii fata de ceilalti
var sum = numbers.reduce(function (result, number) {
  if (number > 0) {
    result = result + number;
  }
  return result
}, 0);

console.log(sum)