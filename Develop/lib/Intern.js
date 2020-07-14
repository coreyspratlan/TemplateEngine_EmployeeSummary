const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (name, id, email, role, school) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email, "Intern"); // Will "Engineer" override the role selection?
            this.school = school;

    }
}

// methods defined here

getSchool () {

}

getRole (){} // Do I need this since it is predefined above ("Intern")?

const intern = new Intern(name, id, email, "Intern", school);

console.log("---Intern---");
intern.getName();
intern.getId ();
intern.getEmail ();
intern.getRole ();
intern.getSchool();


module.exports = Intern;