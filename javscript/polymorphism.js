// ===============================
// 🔹 1. Base Class (Parent)
// ===============================
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Common method (will be overridden)
  speak() {
    console.log(this.name + " makes a sound");
  }
}

// ===============================
// 🔹 2. Child Classes (Overriding)
// ===============================

class Dog extends Animal {
  // Runtime Polymorphism (Method Overriding)
  speak() {
    console.log(this.name + " barks 🐶");
  }
}

class Cat extends Animal {
  speak() {
    console.log(this.name + " meows 🐱");
  }
}

// ===============================
// 🔹 3. Duck Typing (No inheritance)
// ===============================

let robot = {
  name: "Robo",
  speak: function () {
    console.log(this.name + " makes robotic sound 🤖");
  },
};

// ===============================
// 🔹 4. Method Overloading (Simulated)
// ===============================

function greet(name, age) {
  // JS does not support true overloading,
  // so we handle different cases manually
  if (age === undefined) {
    console.log("Hello " + name);
  } else {
    console.log("Hello " + name + ", age: " + age);
  }
}

// ===============================
// 🔥 5. Polymorphism in Action
// ===============================

// Different objects
let dog = new Dog("Tommy");
let cat = new Cat("Kitty");

// Same method call → different behavior
dog.speak(); // Tommy barks 🐶
cat.speak(); // Kitty meows 🐱

// Duck typing → works even without class
robot.speak(); // Robo makes robotic sound 🤖

// ===============================
// 🔹 6. Generic Function (Polymorphic)
// ===============================

function makeSound(entity) {
  // No type check → only behavior matters
  entity.speak();
}

// All objects behave differently with same function
makeSound(dog);
makeSound(cat);
makeSound(robot);

// ===============================
// 🔹 7. Overloading Demo
// ===============================

greet("Mihir"); // Hello Mihir
greet("Mihir", 18); // Hello Mihir, age: 18
