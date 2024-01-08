
// class Person {
//     firstName = "Ali";

//     write() {
//         console.log("Person write", this.firstName);
//     }
// }

// class Student extends Person {

//     write() {

//         console.log("Student write", this.firstName);
//         super.write();
//     }

// }

// let student = new Student();

// student.write();

class Person{

    constructor(firstName, lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }

    writeInfo(){
        console.log(this.firstName, this.lastName,this.salary);
    }
}

class Student extends Person{

    constructor(firstName, lastName,salary){
        super(firstName, lastName,salary);
    }

    writeStudentInfo(){
        super.writeInfo();
    }
}
class Engineer extends Person{

    constructor(firstName, lastName,salary){
        super(firstName, lastName,salary);
    }

    writeStudentInfo(){
        super.writeInfo();
    }
}

let engineer = new Engineer("Ali", "Ar",2300);

engineer.writeStudentInfo();