const mysql = require('mysql');
const Sequelize = require('sequelize');
const inquirer = require('inquirer');
const express = require('express');
const co

module.exports = function () {
    const start = () => {
        inquirer
            .prompt({
                name: 'mainMenu',
                type: 'list',
                message: 'What would you like to do? ',
                choices: [
                    'View All Employees',
                    'View All Empoyees By Department',
                    'View All Employees By Manager',
                    'Add Employee',
                    'Remove Employee',
                    'Update Employee Role',
                    'Update Employee Manager'
                ]
            }).then((answer) => {
                switch (answer.action) {
                    case 'View All Employees':
                        employeeSearch();
                        break;

                    case 'View All Empoyees By Department':
                        departmentSearch();
                        break;

                    case 'View All Employees By Manager':
                        managerSearch();
                        break;

                    case 'Add Employee':
                        addEmployee();
                        break;

                    case 'Remove Employee':
                        removeEmployee();
                        break;

                    case 'Update Employee Role':
                        updateEmployee();
                        break;

                    case 'Update Employee Manager':
                        updateManager();
                        break;

                    default:
                        break;
                }
            });
    }

    const employeeSearch = () => {
        connection.query("SELECT first_name AS FirstName , last_name as LastName , role.title as Role, role.salary AS Salary, department.name AS Department");
        query += ("FROM employee INNER JOIN department ON department.id = employee.role_id left JOIN role ON role.id = employee.role_id",
            function (err, searched) {
                console.table(searched)

            })
        return start()
    }

    const departmentSearch = () => {
        inquirer.prompt({
            name: 'departSearch',
            type: 'list',
            choices: [
                'Sales',
                'Engineering',
                'Finance',
                'Legal'
            ]
        }).then((answer) => {
            switch (answer.action) {
                case 'Sales':
                    salesSearch();
                    break;

                case 'Engineering':
                    engineerSearch();
                    break;

                case 'Finance':
                    financeSearch();
                    break;

                case 'Legal':
                    legalSearch();
                    break;

                default:
                    break;
            }
        });

    }

    

}