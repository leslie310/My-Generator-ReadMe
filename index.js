// TODO: Include packages needed for this application
let inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message:"What is the title of your project?"
    },
    {
        name: "description",
        type:"input",
        message:"Please provide a description of the project"
    },
    {
        name:"installation",
        type:"input",
        message:"How do you install your project?"
    },
    {
        name:"usage",
        type:"input",
        message:"How do you use this project?"
    },
    {
        name:"contribution",
        type:"input",
        message:"How should others contribute to this project?"
    },
    {
        name:"testing",
        type:"input",
        message:"Describe how to test this project?"
    },
    {
        name:"license",
        type:"checkbox",
        message:"Choose a license",
        choices: ["Apache","MIT","Mozilla-Public","None"]
    },
    {
        name:"github",
        type:"input",
        message:"Please enter Github Username?"
    },
    {
        name:"email",
        type:"input",
        message:"Please provide email"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Great! Information has been transferred to README")

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile(`${userInput.title}.md`,generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();