class car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }

  stop() {
    console.log(`${this.brand} is stopping...`);
  }
}

class electricCar extends car {
  constructor(brand, color, battery) {
    super(brand, color);
    this.battery = battery;
  }
  charging() {
    console.log(`${this.brand} is charging...`);
  }
}

let tesla = new electricCar("Tesla", "Red", "100%");
tesla.start();
tesla.charging();
tesla.stop();
console.log(tesla);

// inheritance is the process of creating a new class from an existing class
// in this example we are creating a new class electricCar from the existing class car and we are adding a new method charging() to the electricCar class
// the electricCar class is inheriting the properties and methods of the car class and we can use the start() and stop() methods of the car class in the electricCar class
// inheritance is achieved by using the extends keyword in JavaScript and we can also use the super keyword to call the constructor of the parent class and to access the properties and methods of the parent class in the child class
//using super() we can call the constructor of the parent class and we can also use super.methodName() to call the method of the parent class in the child class


//prototype inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. When we try to access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property or method or reaches the end of the chain. This allows us to create new objects that inherit properties and methods from existing objects without having to create a new class or use the extends keyword.
// in this example we are creating a new object electricCar that inherits properties and methods from the car object using prototype inheritance. We are adding a new method charging() to the electricCar object and we can use the start() and stop() methods of the car object in the electricCar object.
// prototype inheritance is achieved by using the Object.create() method in JavaScript and we can also use the __proto__ property to set the prototype of an object to another object. However, it is recommended to use Object.create() method for creating objects with a specific prototype instead of using __proto__ property as it is not supported in all browsers and it can lead to performance issues.
