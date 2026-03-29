//  POLYMORPHISM FULL DEMO IN JAVA

// ===============================
// 🔹 1. Base Class
// ===============================
class Animal {

    // Method to override
    void speak() {
        System.out.println("Animal makes sound");
    }
}

// ===============================
// 🔹 2. Child Class 1 (Overriding)
// ===============================
class Dog extends Animal {

    @Override
    void speak() {
        System.out.println("Dog barks 🐶");
    }
}

// ===============================
// 🔹 3. Child Class 2 (Overriding)
// ===============================
class Cat extends Animal {

    @Override
    void speak() {
        System.out.println("Cat meows 🐱");
    }
}

// ===============================
// 🔹 4. Compile-time Polymorphism
// ===============================
class MathUtils {

    // Method Overloading
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

// ===============================
// 🔹 5. Main Class
// ===============================
public class Main {
    public static void main(String[] args) {

        // 🔸 Runtime Polymorphism
        Animal a;

        a = new Dog();
        a.speak();  // Dog version

        a = new Cat();
        a.speak();  // Cat version

        // 🔸 Compile-time Polymorphism
        MathUtils m = new MathUtils();

        System.out.println(m.add(5, 10));       // 2 args
        System.out.println(m.add(5, 10, 15));   // 3 args
    }
}