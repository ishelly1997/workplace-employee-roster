const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateProfile = require('./generateProfile');
const Manager = require('./lib:/Manager');
const Engineer = require('./lib:/Engineer.js');
const Intern = require('./lib:/Intern.js');
const employees = [];



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
      console.log('Please Try Again');
    }
  });

createManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: 'Employee name:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Employee email:',
      },
      {
        type:'number',
        name:'employeeId',
        message:'Employee ID number'
      },
      {
        type:'number',
        name:'officeId',
        message:'Office ID number'
      },
    ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeId);
      employees.push(manager);
    })
}

createEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Employee name:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email:',
    },
    {
      type:'number',
      name:'employeeId',
      message:'Employee ID number'
    },
    {
      type: 'number',
      name: 'gitHub',
      message: 'GitHub Username:'
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    employees.push(engineer);
  })
}

createIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Employee name:'
    },
    {
      type:'number',
      name:'employeeId',
      message:'Employee ID number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'School:'
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    employees.push(intern);
  })
}
function writeToFile(generateProfile)('profile.html',answers)

