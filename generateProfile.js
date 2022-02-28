const Employee = require("./Employee");
const Manager = require('./lib:/Manager');
const Engineer = require('./lib:/Engineer.js');
const Intern = require("./lib:/Intern");

function generateProfile(answers) {
    return `${employee.name}
${employee.role}
ID: ${employee.id}
Email: ${employee.email}
Office ID: ${manager.officeID}
GitHub: ${engineer.gitHub}
School: ${intern.school}`;
  }
  
  module.exports = generateProfile;