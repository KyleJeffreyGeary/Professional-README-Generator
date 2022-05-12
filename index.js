// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    //Table of Contents
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents:',
        validate: tableInput => {
            if (tableInput) {
                return true;
            } else {
                console.log('Would you like to add a table of contents?');
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
        message: 'What do you need to use this application?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide a use for your project');
                return false;
            }
        } 
    },
    {
        //License
        type: 'list',
        name: 'license',
        message: 'What license is being used for you project? (Required)',
        choices: ["MIT", "APACHE", "ISC","NONE"],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Provide a license for this project');
                return false;
            }
        }
    },
    {
        // Contributions
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to this project');
                return false;
            }
        }
    },
    {
        //Testing
        type: 'input',
        name: 'testing',
        message: 'What commands are needed to run this application?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to let the user know how to run this application');
                return false;
            }
        }
    },
    {
        //Questions
        type: 'input',
        name: 'questions',
        message: 'Contact the info for any questions'
    },
    {
        //Username
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username');
                return false;
            }
        }      
    },
    {
        //Email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe created'
            });
        });

    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            // console.log('data')
        });
};

// Function call to initialize app
init();
