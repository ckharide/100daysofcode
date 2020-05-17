/*let dog = {
    name: "Pat",
    numLegs: 4,
    sayLegs: function() {
        return "This dog has " +  this.numLegs  + " legs";
    }
  };*/

  var parent = {
    foo: function() {
    console.log('bar');
    }
   };
   var child = Object.create( parent );
   console.log(child.hasOwnProperty('foo')); // false
   console.log(child.foo()); // ‘bar’


function Dog(name , color) {
    this.name = name;
    this.color = color;
}

function Carnivore() {}
function Tiger() {}

Dog.prototype = Object.create(Carnivore.prototype)


Dog.prototype.barks = function() {
    console.log("bark bark whoof whoof");
}

Carnivore.prototype.eats = function() {
    console.log("Eating Stuff Non veg");
}

let House = function (bedrooms) {
    this.bedrooms = bedrooms;
}

let myhouse = {
    bedrooms: 4
}

let mydog = Object.create(Carnivore.prototype);
let mytiger = Object.create(Carnivore.prototype);

//console.log(mydog instanceof Carnivore);
//console.log(mytiger instanceof Carnivore);

let bulldog = new Dog("Bul11" , "Black");
console.log("Using Bull dog barks method ")
bulldog.barks();

let bulldog1 = new Dog("Bul12" , "White");
console.log("Using Bull dog1 barks method ")
bulldog1.barks(); // this fails. 
bulldog1.eats();  // this works.

//console.log(bulldog.eat());

/*
Tiger.prototype = Object.create(Carnivore.prototype)

trerry = Object.create(Carnivore.prototype);
console.log(trerry);
console.log("Num of legs " + trerry.numLegs);
console.log("Treey eat " + trerry.eat());

t1 = new Dog();

let guesthouse = new House(10);

console.log(bulldog.constructor === Dog);
console.log(bulldog.constructor === Object);
//console.log(guesthouse instanceof House);
//console.log(myhouse instanceof House);

console.log(Object.prototype);
console.log(Dog.prototype);
console.log(Dog.prototype.numLegs);

let tiger = Object.create(Carnivore.prototype);
console.log("Tiget Eating" + tiger.eat());
// console.log("Tiget bark" + tiger.bark()); */

function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Warrior.prototype = Object.create(Hero.prototype);
  Healer.prototype = Object.create(Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');

  console.log(hero1.attack());
  console.log(hero1.greet());


