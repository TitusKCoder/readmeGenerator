// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Who contributed to this project?',
                name:'contributors'
            },
            {
                type: 'input',
                message: 'Please describe your project.',
                name: 'description'
            },
            {
                type: 'checkbox',
                message: 'What is your motivation?',
                name: 'motivation',
                choices: [
                    {name: 'money'},
                    {name: 'fun'},
                    {name: 'knowledge'},
                    {name: 'convience'}
                ]
            },
            {
                type: 'input',
                message: 'How do you install the project?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'How is the project used?',
                name: 'usage'
            },
            {   type: 'list',
                message: 'Which license are you using?',
                name: 'license',
                choices: [
                 'mit', 'GNU AGPLv3', 'Apache 2.0', 'Boost Software Liscense 1.0', 'none' 
                ]
            },
            {
                type: 'input',
                message: 'How can someone contribute to this project?',
                name: 'contribute'
            },
            {
                type: 'input',
                message: 'Are there any tests for this project?',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'What is the best email to contact you?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'gitHub'
            },
            {
                type: 'input',
                message: 'Are there any special features to mention?',
                name: 'features'
            }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){ console.log(err)}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(results => {
        const markdown = generateMarkdown(results)
        writeToFile('readME.md', markdown)
        console.log('Your readME.md was successfully created')
    })
}

// Function call to initialize app
init();
