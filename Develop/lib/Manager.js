const Employee = require("./lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) { // Do I need to include the previous paramaters from the Employee.js file?
        super (name, id, email, "Manager", officeNumber); // Will "Manager" override the role selection?
            this.officeNumber = officeNumber;

    }
}

// methods defined here

getofficeNumber () {

}

getRole (){} // Do I need this since it is predefined above ("Manager")?

const manager = new Manager(name, id, email, "Manager", officeNumber);

console.log("---Manager---");
manager.getName();
manager.getId ();
manager.getEmail ();
manager.getRole ();
manager.getofficeNumber();

module.exports = Manager;


