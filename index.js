// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => 
inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is your project title?'
    },
    {
        type:'input',
        name:'description',
        message:'Write down a brief description of your application?'
    },
    {
        type:'input',
        name:'deployedLink',
        message:'Insert the deployed link of your project right here -->'
    },
    {
        type:'input',
        name:'gitHubLink',
        message:'Insert the github repository link with here -->'
    },
    {
        type:'list',
        name:'license',
        message:'What kind of license should your project have?',
        choices:["GPL 3.0", "APACHE 2.0", "BSD 3", "MIT", "None"]
    },
    {
        type:'checkbox',
        name:'technologies',
        message:'Please checkmark which technologies you used for your project? If a technologies is not an option here, select "others"',
        choices:['HTML', 'CSS', 'Javascript', 'Jquery', 'Node.js','Bootstrap','Heroku App', 'Goole APIs', 'Others']
    }

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const flName = fileName
    fs.writeFile(flName, data, (err) => {
        if(err) console.error('Error happened')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions().then((data) => {
        try{
            const rMe = generateMarkdown(data)
            writeToFile("README.md", rMe)
        } catch (error){
            console.log(error);
        }
    })
}

// Function call to initialize app
init();