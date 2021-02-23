// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs')
var genMarkDown = require('generalMarkdown')
// TODO: Create an array of questions for user input
const questions = () => 
inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is your project description?'
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const flName = 'README.md'
    //fs.writeFile(flName, genMarkDown)
}

// TODO: Create a function to initialize app
function init() {
    //questions().then(answers)
}

// Function call to initialize app
init();