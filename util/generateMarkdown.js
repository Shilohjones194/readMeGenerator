// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// basic READ.me temple below. ( still unsure how to do the licensing badge thing...)
const generateMarkdown = data => {}
  return `

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [license](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: Please contact me at [${data.email}](mailto:${data.email}) if you have any questions.

`;

module.exports = generateMarkdown;
//Title of ReadMe
// -description ofReadme
// *Title of table of contents consist of the following *
// *Installation title
// --description
// *Usage
// --descrption
// * license
// -add a badge for license, along with copywrite 
// * Contributing
// -would you like to add users?
// *Tests
// -
// *questions
// -What is your github username? (link should be added)
// -What is your email address? (instructions should be added, stating this is how you reach out to me for additional questions)
-