class Student
{
    // Instance Variables
    int id;
    String name;

    // Static Variable
    static String college = "GEC Patan";

    // Default Constructor
    Student()
    {
        id = 0;
        name = "Unknown";

        System.out.println("Default Constructor Called");
    }

    // Parameterized Constructor
    Student(int id, String name)
    {
        this.id = id;
        this.name = name;

        System.out.println("Parameterized Constructor Called");
    }

    // Copy Constructor
    Student(Student s)
    {
        this.id = s.id;
        this.name = s.name;

        System.out.println("Copy Constructor Called");
    }

    // Method
    void display()
    {
        System.out.println("ID      : " + id);
        System.out.println("Name    : " + name);
        System.out.println("College : " + college);
        System.out.println();
    }

    // Static Method
    static void showCollege()
    {
        System.out.println("College = " + college);
    }

    // Object as Argument
    void compare(Student s)
    {
        if(this.id == s.id)
        {
            System.out.println("Both IDs are same");
        }
        else
        {
            System.out.println("IDs are different");
        }
    }

    // Returning Object
    Student getObject()
    {
        return this;
    }

    // Nested Class
    static class Inner
    {
        void show()
        {
            System.out.println("Nested Class Executed");
        }
    }
}

public class Main
{
    public static void main(String[] args)
    {
        System.out.println("===== DEFAULT CONSTRUCTOR =====");

        Student s1 = new Student();

        System.out.println("\n===== PARAMETERIZED CONSTRUCTOR =====");

        Student s2 = new Student(101, "Mihir");

        System.out.println("\n===== COPY CONSTRUCTOR =====");

        Student s3 = new Student(s2);

        System.out.println("\n===== DISPLAY =====");

        s1.display();
        s2.display();
        s3.display();

        System.out.println("===== STATIC METHOD =====");

        Student.showCollege();

        System.out.println("\n===== OBJECT AS ARGUMENT =====");

        s2.compare(s3);

        System.out.println("\n===== RETURN OBJECT =====");

        Student s4 = s2.getObject();

        s4.display();

        System.out.println("===== ARRAY OF OBJECTS =====");

        Student students[] =
        {
            new Student(201,"Jay"),
            new Student(202,"Rohan"),
            new Student(203,"Krunal")
        };

        for(Student s : students)
        {
            s.display();
        }

        System.out.println("===== ANONYMOUS OBJECT =====");

        new Student(301,"Anonymous").display();

        System.out.println("===== NESTED CLASS =====");

        Student.Inner obj = new Student.Inner();

        obj.show();
    }
}