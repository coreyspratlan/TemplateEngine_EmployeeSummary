const inquirer = require("inquirer");
const jest = require ("jest");

// TODO: Write code to define and export the Employee class


class Employee {
        constructor (name, id, email, role) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.role = role;
            // this.role = role; // Give the user input the choice of the 3 types of roles?

}

// methods defined here

 getName () {
    
}

 getId () {
    
}

 getEmail () {
    
}

 getRole () {
    return "Employee"
}


// methods to run (here or in the team.html generated dynamically?)

// getName ();
// getId ();
// getEmail ();
// getRole ();

module.exports = Employee;
