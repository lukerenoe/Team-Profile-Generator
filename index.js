const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const teamMembers = []

const generateHtml = require('./src/generateHTML.js');

const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

function managerPrompt() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
        },
        {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?",
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",
        },
        {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?",
        },
    ])
    .then((answers) => {
        const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        },
        {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's id?",
        },
        {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        },
        {
        type: 'input',
        name: 'engineerOfficeNumber',
        message: "What is the engineer's Github username?",
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
        );
        teamMembers.push(engineer);
        createTeam();
    });
}

function addIntern() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        },
        {
        type: 'input',
        name: 'internId',
        message: "What is the intern's id?",
        },
        {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
        },
        {
        type: 'input',
        name: 'internOfficeNumber',
        message: "What school did they go to?",
        },
    ])
    .then((answers) => {
        const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
        );
        teamMembers.push(intern);
        createTeam();
    });
}

function createTeam() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
        ],
        },
    ])
    .then((userChoice) => {
        switch (userChoice.memberChoice) {
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            init();
        }
    });
}

function init() {
    fs.writeFileSync(distPath, generateHtml(teamMembers), 'utf-8');
}

managerPrompt();