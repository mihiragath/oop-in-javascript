// 🔥 INHERITANCE FULL DEMO IN JAVA

// ===============================
// 🔹 1. Base Class (Parent)
// ===============================
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void eat() {
        System.out.println(name + " is eating 🍽️");
    }
}

// ===============================
// 🔹 2. Single Inheritance
// ===============================
class Dog extends Animal {

    Dog(String name) {
        super(name); // call parent constructor
    }

    void bark() {
        System.out.println(name + " barks 🐶");
    }
}

// ===============================
// 🔹 3. Multilevel Inheritance
// ===============================
class Puppy extends Dog {

    Puppy(String name) {
        super(name);
    }

    void weep() {
        System.out.println(name + " is weeping 🐕");
    }
}

// ===============================
// 🔹 4. Hierarchical Inheritance
// ===============================
class Cat extends Animal {

    Cat(String name) {
        super(name);
    }

    void meow() {
        System.out.println(name + " meows 🐱");
    }
}

// ===============================
// 🔹 5. Main Class
// ===============================
public class Main {
    public static void main(String[] args) {

        // 🔸 Single Inheritance
        Dog d = new Dog("Tommy");
        d.eat();   // from Animal
        d.bark();  // own method

        // 🔸 Multilevel Inheritance
        Puppy p = new Puppy("Junior");
        p.eat();   // Animal
        p.bark();  // Dog
        p.weep();  // Puppy

        // 🔸 Hierarchical Inheritance
        Cat c = new Cat("Kitty");
        c.eat();   // Animal
        c.meow();  // Cat
    }
}