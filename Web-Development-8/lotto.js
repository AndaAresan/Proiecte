function generate(numberOfResults) {
    if (numberOfResults > 5) {
      return;
    }
  
    var number = Math.floor(Math.random() * 49) + 1;
    console.log(number);
    generate(numberOfResults + 1);
  }