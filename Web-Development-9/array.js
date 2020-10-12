var numbers = [1, 2, 3, 4, 5];
// 0, 1, ,2, 3, 4 - indexes or positions arrays
console.log(numbers);

console.log(numbers[1]);

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// makes it undefined if we don't have the number in the list
console.log(numbers[10]);

// another way to create a list(easier), more restrictive, this one gets through every element everytime
numbers.forEach(function (number) {
    console.log(number);
})

// number.push adds an element to our list (ex. if we have 5 numbers we can add a 6th)
numbers.push(6);
// number.shift adds an element to the beginning of the list
numbers.unshift(-2); 
console.log(numbers);

// update an item from an array (ex:transformed number to text)
numbers[2] = "two";

// deleting an intem from an array
// primul parametru este pozitia de unde vrem sa stergem, al doilea este cate elemente vrem sa stergem de la pozitia aceea
numbers.splice(2, 1);
console.log(numbers);

// filtrarea elementelor din array
// % ne calculeaza impartirea
var oddNumbers = numbers.filter(function (number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
});
console.log(oddNumbers);

// Mapping items from an array (mapping=transforming)
var doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers);

// sorting items based on conditions (ex: sorting from the smallest to the biggest)
var randomNumbers = [3, 11, 421, -521, 4, -5, 8, 98];

randomNumbers.sort(function (firstElement, secondElement) {
    if (firstElement < secondElement) {
        return -1;
    } 
    if (firstElement > secondElement) {
        return 1;
    }
    if (firstElement === secondElement) {
        return 0;
    }
});
console.log(randomNumbers)

// Exercitii:

// 1. Write a function that takes a list of names, and returns another list only with the names having more than 4 characters.
// folosim filtrare pentru ca avem o conditie "having more than 4 characters"
// cand un enunt zice ca functia noastra primeste ceva, automat ne gandim la parantezele rotunde, ce punem inauntrul lor "parametrii"

function filterNames(names) {
    return names.filter(function (name) { 
        if (name.length > 4) {
            return true;
        } else {
            return false;
        }
    });
}

// pentru a lista nume folosim "", pe cand la numere nu folosim nimic
var names = ["Corina", "Adi", "Ana", "Bogdan", "Cristian", "Lena", "Sarah", "Tony"];
var longNames = filterNames(names);
console.log(longNames);

// 2. Write a function that generates 6 lotto numbers, but it makes sure there are no duplicates.

function generate(numberOfResults, results) {
    if (numberOfResults > 5) {
      return;
    }
  
    var number = Math.floor(Math.random() * 49) + 1;
    var isNumberInResult = false;
    for(var index = 0; index < results.length; index++) {
        if (results[index] === number) {
            isNumberInResult = true
        }
    }
    if(isNumberInResult === false) {
        results.push(number);
        generate(numberOfResults + 1, results);
    } else {
        generate(numberOfResults, results);
    }
    return results;
}

console.log(generate(0, []));
   


