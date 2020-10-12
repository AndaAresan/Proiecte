var pet = {
    type: "Fox",
    name: "Rici",
    gut: ["bird", "fish", "rabbit", "mouse", "hen"],
    isBellyFull: false,
    hunger: 2,
    eats: function(gut) {
        this.isBellyFull = true;
        console.log("Eats");}
    },

}

console.log(pet);

var petType = pet.type;
console.log(pet.type);

console.log(pet.isBellyFull);
pet.eats();
console.log(pet.isBellyFull);