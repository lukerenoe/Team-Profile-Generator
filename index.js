const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHTML.js');

const questions = [
    {
        type: "input",
        name: "manager",
        message: "Who is the Team Manager?",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is the Team Manager's ID?",
    },
    {
        type: "input",
        name: "managerPhone",
        message: "What is their phone number?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is their office number?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is their email address?",
    }, 
    {
        type: "list",
        name: "engineer",
        message: "Would you like to add an engineer?",
        choices: ["Yes", "No"]
    }
]

function init() {
    inquirer.prompt(questions).then(function(response){
        fs.writeFileSync("index.html", generateHtml(response))
    })
}

init();