USE employee_db

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Alberto','Steele', 1, NULL),
('Irene', 'Benjamin',2, 1),
('Dean', 'Conner',2, 1),
('Abigail', 'Hale',3,NULL),
('Maggie', 'Baird', 4, 2),
('Eva',  'Gilbert', 5, 2),
('Reed', 'Rosario', 5, 2),
('Mason', 'Rivas', 6, NULL),
('Kaylynn', 'Blankenship',7, 3),
('Braylon', 'Ballard', 8, 3),
('Wesley', 'Powers', 9, NULL),
('Cora', 'Arroyo', 10, 4),
('Tracy', 'Mcmillan', 10, 4),
('Arisha', 'Mackay', 11, 4),
('Ariel', 'Farley', 11, 4),
('Dylon', 'Ward', 11, 4);
