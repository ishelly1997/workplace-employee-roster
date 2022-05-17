const path = require('path');
const generateProfile = require('./generateProfile');
const Manager = require('./lib:/Manager');
const Engineer = require('./lib:/Engineer.js');
const Intern = require('./lib:/Intern.js');
const inquirer = require("inquirer");
const fs = require('fs');
const employees = [];


function firstPrompt() {
inquirer
  .prompt([
    {
        type:'list',
        name:'employeeRole',
        message: "What is this Employee's Role?",
        choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    }
  ])
  .then((employeeRole) => {
    console.log(employeeRole)
    switch(employeeRole.employeeRole) {
        case 'Manager':
        createManager()
            break
        case 'Engineer':
        createEngineer()
        break
        case 'Intern':
            createIntern()
            break
        default:
          exit();
          break
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
      // Prompt couldn't be rendered in the current environment
    }

    });
}

createManager = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Employee name:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Employee email:',
      },
      {
        type:'number',
        name:'id',
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
      firstPrompt();
    })
}

createEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email:',
    },
    {
      type:'number',
      name:'id',
      message:'Employee ID number'
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub Username:'
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
    employees.push(engineer);
    firstPrompt();
  })
}

createIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name:'
    },
    {
      type:'number',
      name:'id',
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
    firstPrompt();
  })
}

function exit() {
  console.log('goodbye');
  fs.writeFile('profile.html', generateProfile(employees), (error) => {
    if(error) throw error;
  }) 
}

firstPrompt();
