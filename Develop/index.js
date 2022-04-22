// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need a title to continue');
                return false;
            }
        }
    },
    //description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a description of the project');
                return false;
            }
        }
    },
    //Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue');
                return false;
            }
        }
    },
    {
        //Usage
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide an use for your project');
                return false;
            }
        } 
    },
    {
        // Contributions
        type: 'input',
        name: 'contributions',
        message: 'How should people contribute to this project?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to this project');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
