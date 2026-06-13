#include <iostream>
using namespace std;

class Student
{
private:
    int id;
    string name;

protected:
    string college;

public:
    // Static Variable
    static int count;

    // Default Constructor
    Student()
    {
        id = 0;
        name = "Unknown";
        college = "GEC";
        count++;
        cout << "Default Constructor Called" << endl;
    }

    // Parameterized Constructor
    Student(int i, string n)
    {
        id = i;
        name = n;
        college = "GEC";
        count++;
        cout << "Parameterized Constructor Called" << endl;
    }

    // Copy Constructor
    Student(const Student &s)
    {
        id = s.id;
        name = s.name;
        college = s.college;
        count++;
        cout << "Copy Constructor Called" << endl;
    }

    // Inline Function
    inline void display()
    {
        cout << "\nID: " << id;
        cout << "\nName: " << name;
        cout << "\nCollege: " << college;
        cout << endl;
    }

    // Setter using this pointer
    void setData(int id, string name)
    {
        this->id = id;
        this->name = name;
    }

    // Return Object
    Student getObject()
    {
        return *this;
    }

    // Static Function
    static void showCount()
    {
        cout << "\nTotal Objects Created: " << count << endl;
    }

    // Friend Function Declaration
    friend void showPrivateData(Student);

    // Destructor
    ~Student()
    {
        cout << "Destructor Called for " << name << endl;
    }
};

// Static Variable Initialization
int Student::count = 0;

// Friend Function
void showPrivateData(Student s)
{
    cout << "\nFriend Function Access";
    cout << "\nID = " << s.id;
    cout << "\nName = " << s.name << endl;
}

// Friend Class
class Teacher
{
public:
    void show(Student s)
    {
        cout << "\nTeacher Accessing Student Data";
        showPrivateData(s);
    }
};

// Nested Class
class Outer
{
public:
    class Inner
    {
    public:
        void message()
        {
            cout << "\nNested Class Example";
        }
    };
};

// Object as Argument
void printStudent(Student s)
{
    cout << "\nObject Passed as Function Argument";
    s.display();
}

int main()
{
    cout << "\n===== DEFAULT CONSTRUCTOR =====\n";
    Student s1;

    cout << "\n===== PARAMETERIZED CONSTRUCTOR =====\n";
    Student s2(101, "Mihir");

    cout << "\n===== COPY CONSTRUCTOR =====\n";
    Student s3(s2);

    cout << "\n===== DISPLAY DATA =====\n";
    s1.display();
    s2.display();
    s3.display();

    cout << "\n===== THIS POINTER =====\n";
    s1.setData(102, "Rohan");
    s1.display();

    cout << "\n===== OBJECT AS ARGUMENT =====\n";
    printStudent(s2);

    cout << "\n===== RETURN OBJECT =====\n";
    Student s4 = s2.getObject();
    s4.display();

    cout << "\n===== FRIEND FUNCTION =====\n";
    showPrivateData(s2);

    cout << "\n===== FRIEND CLASS =====\n";
    Teacher t;
    t.show(s2);

    cout << "\n===== STATIC MEMBER =====\n";
    Student::showCount();

    cout << "\n===== ARRAY OF OBJECTS =====\n";

    Student arr[2] = {
        Student(201, "Jay"),
        Student(202, "Krunal")};

    arr[0].display();
    arr[1].display();

    cout << "\n===== NESTED CLASS =====\n";
    Outer::Inner obj;
    obj.message();

    return 0;
}