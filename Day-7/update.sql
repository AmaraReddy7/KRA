/*Trigger update function */
UPDATE employeeS SET
e_lname = 'patel' WHERE id = 1;

/*tRIGGER UPDATE FUNCTION AFTER*/
UPDATE salaries 
SET salary = 60000 WHERE id = 1;