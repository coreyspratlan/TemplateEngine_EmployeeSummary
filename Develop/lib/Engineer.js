const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor (name, id, email, role, github) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email, "Engineer"); // Will "Engineer" override the role selection?
            this.github = github;

    }
}

// methods defined here

getGitHub () {

}

getRole (){} // Do I need this since it is predefined above ("Engineer")?

const engineer = new Engineer(name, id, email, "Engineer", github);

console.log("---Engineer---");
engineer.getName();
engineer.getId ();
engineer.getEmail ();
engineer.getRole ();
engineer.getGitHub();

module.exports = Engineer;