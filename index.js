
// call it with "node index.js"
// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const util = require('util');

const generatePage = () => 'Github: Name, Github: Project';
console.log(generatePage());

// TODO: Create an array of questions for user input //
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your ReadME?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How did you install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage',
        },
///STill not 100% on how to do the license/badge part//
        {
            name: 'license',
            type: 'list',
            message: 'Choose your license:',
            choices: ['', '', ''],
        },
        {
            type: 'input',
            message: 'Add all of the contributors.',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What kind of tests do you run on your project?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
    ]);
};
//Title of ReadMe
// -description ofReadme
// *Title of table of contents consist of the following *
// *Installation title
// --description
// *Usage
// --descrption
// * liscense
// -add a badge for liscense, along with copywrite 
// * Contributing
// -would you like to add users?
// *Tests
// -
// *questions
// -What is your github username? (link should be added)
// -What is your email address? (instructions should be added, stating this is how you reach out to me for additional questions)
-





// const questions = [];
// message: 'Please give a good description of it:',
// message: 'Now t'
// message:
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
module.exports =