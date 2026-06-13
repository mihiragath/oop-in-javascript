// Polymorphism
// │
// ├── Compile Time Polymorphism
// │     ├── Function Overloading
// │     ├── Operator Overloading
// │
// └── Run Time Polymorphism
//       ├── Function Overriding
//       ├── Virtual Function

#include <iostream>
using namespace std;

// Base Class
class Animal
{
public:
    // Method Overloading
    void sound()
    {
        cout << "Animal makes a sound" << endl;
    }

    void sound(string name)
    {
        cout << name << " makes a sound" << endl;
    }

    // Virtual Function for Overriding
    virtual void eat()
    {
        cout << "Animal eats food" << endl;
    }
};

// Derived Class
class Dog : public Animal
{
public:
    // Method Overriding
    void eat() override
    {
        cout << "Dog eats meat" << endl;
    }
};

int main()
{
    cout << "===== METHOD OVERLOADING =====" << endl;

    Animal a;

    a.sound();      // Overloaded Method 1
    a.sound("Dog"); // Overloaded Method 2

    cout << "\n===== METHOD OVERRIDING =====" << endl;

    Dog d;

    d.eat(); // Calls Dog's eat()

    cout << "\n===== RUNTIME POLYMORPHISM =====" << endl;

    Animal *ptr;
    ptr = &d;

    ptr->eat(); // Calls Dog's eat() because of virtual function

    return 0;
}