// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')
var inquirer = require('inquirer')
//var title = questions[0];


console.log("hello world")
// TODO: Create an array of questions for user input

const questions = 

    [
        {
        type: 'input',
        name: 'title',
        message: 'What is your project title'


    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project'


    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'


    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution information'


    },

    {
        type: 'input',
        name: 'Tests',
        message: 'Provide test information'


    },
]



// TODO: Create a function to write README file
//function writeToFile(readMe, data) {}
function writeToFile ()  {fs.writeFile('./readMe.md', generateMarkdown(), err => {
  if (err) throw err;
    console.log('Readme complete');
 });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (
        questions
    )
    .then((answers)=>{
        console.log("from index")
        console.log(answers)
        generateMarkdown(answers)
        writeToFile()
    })
}

// Function call to initialize app
init()
