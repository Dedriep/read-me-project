// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')
var inquirer = require('inquirer')


console.log("hello world")
// TODO: Create an array of questions for user input

const questions = inquirer.prompt = () => {
    
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
        name: 'contricution',
        message: 'Provide contribution information'


    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project title'


    },
]
return inquirer.prompt()
};

questions().then(answers => console.log(answers));


// TODO: Create a function to write README file
//function writeToFile(readMe, data) {}
// fs.writeFile('readMe.md', generateMarkdown(data), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
