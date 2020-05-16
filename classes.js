let dog = {
    name: "Pat",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " +  this.numLegs  + " legs";
    }
  };

  console.log(dog.name);
console.log(dog.sayLegs());

function Dog(){
    this.name = "Chicky";
    this.color = "White";
}

function Dog(name , color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let House = function(bedrooms) {
    this.bedrooms = bedrooms;
}

let myhouse = {
    bedrooms: 4
}

dog = new Dog();
console.log(dog);

dog = new Dog("X1" ,"Yello", 4);
console.log(dog);

trerry = new Dog("Y1" , "yellow");
console.log(trerry);

let guesthouse = new House(10);
console.log(guesthouse instanceof House);
console.log(myhouse instanceof House);


