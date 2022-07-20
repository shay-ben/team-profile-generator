const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const team = []; 

const inquirer = () => { 
    return inquirer
        .prompt([
            {    
                type: "input",
                name: "name",
                message: "What is your team members name?",
              },
              {
                type: "list",
                name: "title",
                message: "What job title does this team member have?",
                choices: ["Manager", "Engineer", "Intern"],
              },
              {    
                type: "input",
                name: "name",
                message: "What is your team members managers name?",
              },

              {
                type: "input",
                name: "id",
                message: "Please input your team member's id number",
              },
              {
                type: "input",
                name: "email",
                message: "Please input your team member's email address",
              },
              {
              type: "input",
              name: "office",
              message: "What is your team members office number?"
            },

        ])


}