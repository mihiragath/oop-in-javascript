class Student {
  // Static Property
  static college = "GEC Patan";

  // Private Field (Encapsulation)
  #password;

  // Constructor
  constructor(id = 0, name = "Unknown", password = "123") {
    this.id = id;
    this.name = name;
    this.#password = password;

    console.log("Constructor Called");
  }

  // Method
  display() {
    console.log("ID :", this.id);
    console.log("Name :", this.name);
    console.log("College :", Student.college);
    console.log("------------------");
  }

  // Getter
  get password() {
    return this.#password;
  }

  // Setter
  set password(newPassword) {
    this.#password = newPassword;
  }

  // Object as Argument
  compare(student) {
    if (this.id === student.id) console.log("Both IDs are same");
    else console.log("IDs are different");
  }

  // Returning Object
  getObject() {
    return this;
  }

  // Static Method
  static showCollege() {
    console.log("College :", Student.college);
  }

  // Nested Class
  static Inner = class {
    show() {
      console.log("Nested Class Executed");
    }
  };
}

// =========================
// OBJECT CREATION
// =========================

console.log("===== OBJECTS =====");

const s1 = new Student();

const s2 = new Student(101, "Mihir", "abc123");

s1.display();
s2.display();

// =========================
// GETTER & SETTER
// =========================

console.log("===== GETTER SETTER =====");

console.log(s2.password);

s2.password = "newpass";

console.log(s2.password);

// =========================
// STATIC METHOD
// =========================

console.log("===== STATIC METHOD =====");

Student.showCollege();

// =========================
// OBJECT AS ARGUMENT
// =========================

console.log("===== OBJECT ARGUMENT =====");

const s3 = new Student(101, "Rohan");

s2.compare(s3);

// =========================
// RETURN OBJECT
// =========================

console.log("===== RETURN OBJECT =====");

const obj = s2.getObject();

obj.display();

// =========================
// ARRAY OF OBJECTS
// =========================

console.log("===== ARRAY OF OBJECTS =====");

const students = [
  new Student(201, "Jay"),
  new Student(202, "Krunal"),
  new Student(203, "Parth"),
];

students.forEach((student) => {
  student.display();
});

// =========================
// ANONYMOUS OBJECT
// =========================

console.log("===== ANONYMOUS OBJECT =====");

new Student(301, "Anonymous").display();

// =========================
// NESTED CLASS
// =========================

console.log("===== NESTED CLASS =====");

const innerObj = new Student.Inner();

innerObj.show();
