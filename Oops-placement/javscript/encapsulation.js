class SpinGame {
  #spin = 100; // private field

  #burnSpin() {
    this.#spin -= 1;
  }

  start() {
    this.#burnSpin();
    console.log("SpinGame is starting...");
  }
}

let game = new SpinGame();
game.start();
console.log(game);

// encapsulation is the process of hiding the internal details of an object and only exposing the necessary details to the user
// in this example we are using the private field #spin and the private method #burnSpin() to hide the internal details of the SpinGame class and only exposing the start() method to the user
// the user can only call the start() method to start the game and they don't need to know how the game is starting internally
// encapsulation is achieved by using the access modifiers like private, protected and public in other programming languages but in JavaScript we can achieve encapsulation by using the concept of closures and modules
// in this example we are using the concept of closures to achieve encapsulation by making the #spin field and the #burnSpin() method private and only exposing the start() method to the user
