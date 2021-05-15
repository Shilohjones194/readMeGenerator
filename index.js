// call it with "node index.js"
const fs =require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

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
            message: 'What are the steps required to install your project?',
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
            choices: ['MIT', 'ISC', 'APACHE%202.0',"None"],
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
    ]).then(function(response){
        // console.log(response)
       var readMeData =  generateMarkdown(response)
       fs.writeFileSync('README.md', readMeData, function(err,message){
           if (err) throw err;
       })
        // .then(function(readMeData) {
            console.log(readMeData);
        // })
    })
};



// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();