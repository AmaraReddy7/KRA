
CREATE TABLE products(product_id serial NOT NULL UNIQUE, product_name varchar(250) NOT NULL, category_id INTEGER NOT NULL PRIMARY KEY);

CREATE TABLE category(category_id INTEGER NOT NULL PRIMARY KEY, category_name varchar(250), category_description varchar(250))


CREATE TABLE student(student_id SERIAL PRIMARY KEY,student_name VARCHAR(250) NOT NULL, 
student_gender char(1) NOT NULL, student_JD date);

CREATE TABLE employee(employee_id SERIAL PRIMARY KEY,employee_name VARCHAR(250) NOT NULL, 
employee_gender char(1) NOT NULL, employee_JD date);

CREATE TABLE contacts(contact_id INT PRIMARY KEY, contact_name varchar(250),
phone VARCHAR(13) NOT NULL UNIQUE);

CREATE TABLE customers(customer_id integer, first_name varchar(250), last_name varchar(250));


/*TRiggers*/
CREATE TABLE employeeS(id INTEGER PRIMARY KEY, e_fname VARCHAR(220) NOT NULL,e_lname VARCHAR(220) NOT NULL);

CREATE TABLE employeeS_audit(id INTEGER PRIMARY KEY, e_lname VARCHAR(220) NOT NULL, changed_on TIMESTAMP NOT NULL);

/*INSERT TRIGGER*/
CREATE TABLE employeeship(id INTEGER PRIMARY KEY,employeship_id int REFERENCES employeeS(id),employeeship_type varchar(50) NOT NULL DEFAULT 'free' );


/*uPDATE TRIGGERS TABLE*/
CREATE TABLE salaries(id INTEGER primary key,name VARCHAR(240) NOT NULL, salary NUMERIC NOT NULL );

CREATE TABLE salaries_ch(id SERIAL  PRIMARY KEY, e_id INTEGER NOT NULL, old_salary NUMERIC NOT NULL, new_salary NUMERIC NOT NULL);