const inquirer = require("inquirer");
const fs = require('fs');
const { createECDH } = require("crypto");

inquirer
  .prompt([
    {
        type:'list',
        name:'employeeRole',
        message: "What is this Employee's Role?",
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    }
  ])
  .then((employeeRole) => {
    switch(employeeRole) {
        case 'Manager':
        createManager()
            break
        case 'Engineer':
        createEngineer()
        case 'Employee':
            createEmployee()
        case 'Intern':
            createIntern()
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//createManager use inquirer to capture user input for properties of selected 
//newManager
//newEmployee