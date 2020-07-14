const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

    // I need three objects each named: Manager, Engineer, Intern.


inquirer.prompt (
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "number",
        message: "What is your id number?",
        name: "idnumber"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your role?",
        name: "", //how do I list the 3 choices - checkbox?
    },

// Do I need an if statment to determine the next set of questions?

// Manager Question
    {
        type: "input",
        message: "What is your office number?",
        name: "number"
    },

// Engineer Question
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github"
    },

// Intern Question
    {
        type: "input",
        message: "What is your school name?",
        name: "schoolname"
    },

// A Question after each set is finished to return to the beginning
// or if they are done inputting employees.
      {
        type: "confirm",
        message: "Are you finished inputting emplyees?",
        name: "finished"

    }).then function (){

// Do I create an empty object array const teamArray = [" "];

// I need a function for gathering the teamArray.  teamArray.prototype?

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

return ???
    }

render (teamArray);

// I need a way to link the render function value above to the corresponding html file


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. 
// Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
