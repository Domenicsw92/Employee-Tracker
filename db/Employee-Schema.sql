DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,  
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
);

USE employee_db;
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal')

INSERT INTO role (title,salary,department_id)
VALUES 
('Sales Lead', 95000, 1), 
('Salesperson', 65000, 1), 
('Lead Engineer', 150000, 2),
('Software Eningeer', 120000, 2),
('FullStack Developer', 100000, 2), 
('Finance Manager', 130000, 3)
('Finance Lead', 100000, 3)
('Accountant', 90000, 3)
('Chief Legal Lawyer', 200000, 4)
('Lawyer', 120000, 4)
('Legal Team', 80000, 4)



