const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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
const createEmployee = () =>
const newEmployee = () =>

const createManager = () => {
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
    ])
}
const newManager = () =>

const createEngineer = () => {
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
      name: 'gitHud',
      message: 'GitHub Username:'
    }
  ])
}
const newEngineer

const createIntern = () => {
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
  ])
}
