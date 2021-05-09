const mysql = require('mysql');
const Sequelize = require('sequelize');
const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table')
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

});

const start = () => {
    inquirer
        .prompt({
            name: 'mainMenu',
            type: 'list',
            message: 'What would you like to do? ',
            choices: [
                'View All Employees',
                'View All Employees By Department',
                'View All Employees By Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager'
            ]
        }).then((answer) => {
            switch (answer.mainMenu) {
                case 'View All Employees':
                    employeeSearch();
                    break;

                case 'View All Employees By Department':
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
    connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name  AS Department FROM employee INNER JOIN department ON department.id = employee.role_id  left JOIN role ON role.id = employee.role_id',
        (err, searched) => {
            if (err) throw err;
            console.table(searched);
            start();
        }
        );
    
}
/// connection.querey for all departments apend departments into an array 
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
        switch (answer.departSearch) {
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



start()