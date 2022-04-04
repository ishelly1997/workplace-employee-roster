const Employee = require("./lib:/Employee");
const Manager = require('./lib:/Manager');
const Engineer = require('./lib:/Engineer.js');
const Intern = require("./lib:/Intern");

function generateProfile(answers) {
  console.log(answers);
  var html = '';
  for(i=0;i<answers.length;i++){
    html+=`${answers[i].name}
    ${answers[i].role}
    ID: ${answers[i].id}
    Email: ${answers[i].email}
    Office ID: ${answers[i].officeId}
    GitHub: ${answers[i].gitHub}
    School: ${answers[i].school}`
  }
    return html;
  }
  
  module.exports = generateProfile;