const hoodie = {
    color: "blue",
    isClosed: true,
    zip: () => !isClosed,
  };
  
  class Dog {
    constructor(name, breed) {
      // method mandatory - here we initialize the class
      this.name = name; // fields
      this.breed = breed; // fields
    }
  
    bark() {
      console.log(`Bark Bark! My name is ${this.name}`);
      // console.log("Bark Bark! My name is " + this.name)
    }
  
    static info() {
      console.log("A dog is better than a cat"); // or not really
    }
  }
  
  const azorel = new Dog("Azorel", "German Sheppard"); // this is an instance of Dog
  const lassy = new Dog("Lassy", "Collie cu par lung"); // this is another instance of Dog
  console.log(azorel.breed);
  console.log(lassy.name, lassy.breed);
  
  azorel.bark();
  lassy.bark();
  
  Dog.info();
  
  class Animal {
    constructor(name) {
      this.name = name;
      this.thirst = 100;
      this.belly = [];
    }
  
    drink() {
      this.thirst = this.thirst - 10;
      return this.thirst;
    }
  
    eat(food) {
      this.belly.push(food);
      return this.belly;
    }
  }
  
  const elephant = new Animal("Dumbo");
  console.log(elephant.name);
  elephant.drink();
  console.log(elephant.thirst);
  elephant.eat("Peanuts");
  console.log(elephant.belly);
  
  class Wolf extends Animal {
    constructor(fur, isInPack, name) {
      super(name);
      this.fur = fur;
      this.isInPack = isInPack;
    }
  
    isLoneWolf() {
      return this.isInPack;
    }
  }
  
  const coltAlb = new Wolf("white", false, "Colt Alb");
  console.log(coltAlb.name, coltAlb.belly);
  
  coltAlb.eat("rabbit");
  console.log(coltAlb.belly);
  
  console.log(elephant.isLoneWolf());