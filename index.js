const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

teamArray = [];

// Function to initialize app
function init () {
    inquirer.prompt ([{
        type: "list",
        message: "What type of employee do you want to add onto your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "None"]
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