// acoladele sunt folosite mereu la objects
// metodele sunt functiile din interiorul obiectelor
// with this "this.isEngineStarted = true; " we can access other properties and methods for
var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    isEngineStarted: false,
    fuel: 10,
    startEngine: function () {
        this.isEngineStarted = true; 
        console.log("Engine Started");
    },
    refuel: function (fuelAmount) {
        this.fuel =this.fuel + fuelAmount;
        console.log("Refuel with: ", fuelAmount);
    }
};

console.log(car);

// "." este operatorul pe care il folosim ca sa accesam proprietati din obiect
// 1.Varianta mai simpla
var carType = car.type;
console.log(carType);
// 2. Nu e foarte recomandat
console.log(car["type"]);

// ca sa invocam o functie de pe un obiect
console.log(car.isEngineStarted);
car.startEngine();
console.log(car.isEngineStarted);

console.log("Before we had: ", car.fuel);
car.refuel(30);
console.log("Now we have: ", car.fuel);

