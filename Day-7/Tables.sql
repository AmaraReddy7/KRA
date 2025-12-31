
CREATE TABLE products(product_id serial NOT NULL UNIQUE, product_name varchar(250) NOT NULL, category_id INTEGER NOT NULL PRIMARY KEY);

CREATE TABLE category(category_id INTEGER NOT NULL PRIMARY KEY, category_name varchar(250), category_description varchar(250))


CREATE TABLE student(student_id SERIAL PRIMARY KEY,student_name VARCHAR(250) NOT NULL, 
student_gender char(1) NOT NULL, student_JD date);

CREATE TABLE employee(employee_id SERIAL PRIMARY KEY,employee_name VARCHAR(250) NOT NULL, 
employee_gender char(1) NOT NULL, employee_JD date);
