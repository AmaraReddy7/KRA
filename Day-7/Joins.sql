
/*Innerjoin = The inner keyword brings the result or values that have matching values in both the table */
SELECT products.product_id, products.product_name, category.category_id,
category.category_name, category.category_description FROM products INNER JOIN category 
on products.category_id = category.category_id;


/*Leftjoin = It will give the result all the values from the left table and matching values from the right table */
SELECT products.product_name, category.category_id,
category.category_name, category.category_description FROM products LEFT JOIN category 
on products.category_id = category.category_id;

/*Rightjoin = it will giive the all the values from the right table and matching values from the left table */
SELECT products.product_id,products.product_name, category.category_id,
category.category_description FROM products RIGHT JOIN category 
on products.category_id = category.category_id;

/*FULLOuterJoin = It return all the rows from the left table and right table if they matched or not*/
SELECT Products.product_id,products.product_name, category.category_id,
category.category_name, category.category_description FROM products FULL OUTER JOIN category 
on products.category_id = category.category_id;

/*CROSSJOIN = It will return the all record from left table with each record with right table*/
SELECT Products.product_id,products.product_name, category.category_id,
category.category_description FROM products CROSS JOIN category;

/*SELFJoin = It is used to join the rows of a table itself. This join is particularly used to compares the rows with in itself*/

/*Union = It is used to join two different tables if they have same number of columns, columns should havesame datatypes and 
columns must be in same order and returns unique values.*/

SELECT student_id, student_name, student_gender,student_JD FROM 
student UNION
SELECT employee_id, employee_name, employee_gender, employee_JD 
FROM employee ORDER BY student_id;

/* UNION ALL : It will returns all the values including repeating values*/
SELECT student_id, student_name, student_gender,student_JD FROM 
student UNION ALL
SELECT employee_id, employee_name, employee_gender, employee_JD 
FROM employee ORDER BY student_id;

