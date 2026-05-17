class Car {
  fule = 100;

  burnFule() {
    this.fule -= 1;
  }

  start() {
    this.burnFule();
    console.log("Car is starting...");
  }
}

let buggati = new Car();
buggati.start();
console.log(buggati);

// abstraction is hiding the internal details and showing only the functionality to the user
//start() is the abstraction method which is hiding the internal details of how the car is starting and showing only the functionality to the user
// the user can only call the start() method to start the car and they don't need to know how the car is starting internally
// abstraction is achieved by using the access modifiers like private, protected and public in other programming languages but in JavaScript we can achieve abstraction by using the concept of closures and modules
// in this example we are using the concept of closures to achieve abstraction by making the burnFule() method private and only exposing the start() method to the user
