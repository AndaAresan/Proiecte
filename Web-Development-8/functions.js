function sum(a, b) {
    var c = a + b;
    return c;
  }
  
  var x = sum(10, 5);
  console.log(x); // 15
  
  console.log(sum(20, 30)); // 50
  
  function isNumberEven(number) {
    var isEven = number % 2;
  
    if (isEven === 0) {
      console.log("The number " + number + " is even");
    } else {
      console.log("The number " + number + " is odd.");
    }
  
    return isEven === 0; // true or false
  }
  
  console.log(isNumberEven(4));
  console.log(isNumberEven(3));
  
  console.log(Math.floor(4.6)); // 4
  
  console.log(Math.pow(2, 5)); // 32
  
  console.log(Math.min(2, 10, 124, 12, 1, -5, 12521));
  
  console.log(Math.random());
  
  var number1 = Math.floor(Math.random() * 49);
  var number2 = Math.floor(Math.random() * 49);
  var number3 = Math.floor(Math.random() * 49);
  var number4 = Math.floor(Math.random() * 49);
  var number5 = Math.floor(Math.random() * 49);
  var number6 = Math.floor(Math.random() * 49);
  console.log(number1, number2, number3, number4, number5, number6);
  
  function generateWinningLotteryNumbers(numberOfResults) {
    if (numberOfResults > 6) {
      return;
    }
  
    var number = Math.floor(Math.random() * 49);
    console.log("Lottery number: ", number);
    generateWinningLotteryNumbers(numberOfResults + 1);
  }
  
  generateWinningLotteryNumbers(1);
  var n = new Date().getHours();
  console.log(n);