var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById("numbers").innerHTML = numbers;

function myFunction() {
  numbers.reverse();
  document.getElementById("numbers").innerHTML = numbers;
};

console.log(numbers)