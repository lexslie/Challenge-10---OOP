const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const generateTeam = require("./src/template")
 

teamArray = [];

// Function to initialize app
function init () {
 function createTeam () {

    inquirer.prompt ([{
        type: "list",
        message: "What type of employee do you want to add onto your team?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "addEmployeePrompt"
    }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;

            default:
                htmlBuilder();
        }
    })
 }

    // Functions for employee prompts to add each employee type
    function addManager() {
        inquirer.prompt ([

            {type: "input",
            message: "What is the manager's name?",
            name: "managerName"
            },
            {type: "input",
            message: "What is the manager's employee id?",
            name: "managerId"
            },
            {type: "input",
            message: "What is the manager's email?", 
            name: "managerEmail"
            },
            {type: "input",
        message: "What is the manager's office number?", 
        name: "managerOfficeNumber"
            }

        ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
        });
    }

    function addEngineer() {
        inquirer.prompt ([

            {type: "input",
            message: "What is the engineer's name?",
            name: "engineerName"
            },
            {type: "input",
            message: "What is the engineer's employee id?",
            name: "engineerId"
            },
            {type: "input",
            message: "What is the engineer's email?", 
            name: "engineerEmail"
            },
            {type: "input",
            message: "What is the engineer's GitHub username?", 
            name: "engineerGithub"
            }

        ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt ([
            {type: "input",
            message: "What is the intern's name?",
            name: "internName"
            },
            {type: "input",
            message: "What is the intern's employee id?",
            name: "internId"
            },
            {type: "input",
            message: "What is the intern's email?", 
            name: "internEmail"
            },
            {type: "input",
            message: "What school does the intern attend?", 
            name: "internSchool"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    // Function to create the html file
    function htmlBuilder () {
        console.log("Your team has been successfully created!")
        fs.writeFileSync(distPath, generateTeam(teamArray), "UTF-8")
    }

    createTeam();
}

// Function call to initialize app
init ();