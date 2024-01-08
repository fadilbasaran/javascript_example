
class Person {
    firstName = "Ali";

    write() {
        console.log("Person write", this.firstName);
    }
}

class Student extends Person {

    write() {

        console.log("Student write", this.firstName);
        super.write();
    }

}

let student = new Student();

student.write();