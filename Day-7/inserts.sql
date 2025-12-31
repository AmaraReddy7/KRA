INSERT INTO products(product_name,category_id) VALUES ('tata-car', 5),
('grocessories',8),('carrot',9),('samsungwatch',4),('villa',3);


INSERT INTO category(category_id, category_name, category_description) VALUES
(1,'Apartmenst', 'It describes about the apartments if you need to buy there are various types of apartments'),
(2,'Land','It describes the various types of land is present farming land, outskirtsland'),
(3,'Villas','It shows the various types of villas are present in the city'),
(4,'Watches','There are various kind of watch brand you can choose your preferred one'),
(5,'cars','There are various campanies cars you can choose one'),
(6,'clothes','Different kind of fashion clothes'),
(7,'Bussiness','You need to maintain logically in tough situtaions'),
(8,'Vegitables','These are good source for a healthy diet'),
(9,'Grocessory','the items which you need to run a day or month');


INSERT INTO student (student_name,student_gender,student_JD ) VALUES 
('lalith','M','2024-10-22'),
('Srugan','M','2022-10-01'),
('Priya','F','2020-06-20');

INSERT INTO employee (employee_name,employee_gender,employee_JD ) VALUES 
('karthik','M','2023-10-22'),
('kiran','M','2022-10-11'),
('supriya','F','2019-06-22');

INSERT INTO contacts(contact_id, contact_name,phone) values(1, 'Aman', '6543213980'),
(2,'Suman','8976543210'),(3,'vaman','6789054321'),(4,'siman','6543217890');


/* Insertion to verify newly created unique indexes*/
INSERT INTO contacts(contact_id, contact_name,phone) values(5, 'Aman', '6543213987');
INSERT INTO contacts(contact_id, contact_name,phone) values(6, 'SAman', '6543213987');/* It shows error for duplicate phone number*/

INSERT INTO customers(customer_id,first_name,last_name)VALUES(1,'eman','sonia'),
(2,'Bhanu','prakash'),
(3,'kiran','kumar');

/*triggers*/
INSERT INTO employeeS(id,e_fname,e_lname) VALUES(1,'saran','vinal'),(2,'sony','singh');


/*iNSERTING VALUE AFTER INSERTION OF VALUES*/
INSERT INTO employeeS(id,e_fname,e_lname) VALUES(4,'SOMESH','singh');

/*update triggers*/
INSERT INTO salaries (id,name,salary) values (1,'suyman',70000),
(2,'flora',50000);