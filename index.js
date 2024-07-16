// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter the credits',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the test instructions',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license',
        validate: (input) => input.length > 0 || 'Please enter some text.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
        console.log('README file has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownData = generateMarkdown(answers);
        writeToFile('README.md', markdownData);
    });
}

// Function call to initialize app
init();
