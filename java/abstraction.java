// 🔥 ABSTRACTION FULL DEMO IN JAVA

// ===============================
// 🔹 1. Abstract Class
// ===============================
abstract class Vehicle {

    // Abstract method (no body)
    abstract void start();

    // Concrete method (with implementation)
    void fuelType() {
        System.out.println("Vehicle needs fuel");
    }
}

// ===============================
// 🔹 2. Derived Class 1
// ===============================
class Car extends Vehicle {

    // Must override abstract method
    @Override
    void start() {
        System.out.println("Car starts with key 🔑");
    }
}

// ===============================
// 🔹 3. Derived Class 2
// ===============================
class Bike extends Vehicle {

    @Override
    void start() {
        System.out.println("Bike starts with self button 🏍️");
    }
}

// ===============================
// 🔹 4. Another Derived Class
// ===============================
class ElectricCar extends Vehicle {

    @Override
    void start() {
        System.out.println("Electric Car starts silently ⚡");
    }
}

// ===============================
// 🔥 5. Runtime Abstraction (Main)
// ===============================
public class Main {
    public static void main(String[] args) {

        Vehicle v; // reference of abstract class

        Car c = new Car();
        Bike b = new Bike();
        ElectricCar e = new ElectricCar();

        // Same reference → different behavior
        v = c;
        v.start();       // Car
        v.fuelType();    // common

        v = b;
        v.start();       // Bike

        v = e;
        v.start();       // Electric Car
    }
}