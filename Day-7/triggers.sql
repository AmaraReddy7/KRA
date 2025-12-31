//*Function  Creation UPDATING THE LNAME*/
CREATE OR REPLACE FUNCTION log_last_name_changes() 
RETURNS TRIGGER
LANGUAGE plPgSQL
AS 
$$
BEGIN
   IF NEW.e_lname <> OLD.e_lname THEN 
     INSERT INTO employeeS_audit(id, e_lname, changed_on)
	 VALUES(OLD.id,OLD.e_lname,now());

	 END IF;

	   RETURN NEW;

	   END;
$$


/*TRIGGERS UPDATING THE LNAME*/ 
CREATE TRIGGER last_name_changes
BEFORE 
UPDATE ON
employeeS
FOR EACH ROW
EXECUTE PROCEDURE log_last_name_changes();


/*Dropping Triggers*/
DROP TRIGGER last_name_changes ON employeeS;

/* Altering the trigger canging name of it*/
ALTER TRIGGER last_name_changes ON employeeS
RENAME TO last_n_changes;

/*iNSERTION TRiggers FUNCTION*/
CREATE OR REPLACE FUNCTION create_employeeS_audit_after_insert() 
RETURNS TRIGGER

AS 
$$
BEGIN
   
     INSERT INTO employeeS_audit(id)
	 VALUES(NEW.id);

	

	   RETURN NEW;

	   END;
$$ LANGUAGE plPgSQL;

/*insertion trigger*/
CREATE TRIGGER after_insert_employeeS_trigger
AFTER
INSERT ON
employeeS
FOR EACH ROW
EXECUTE PROCEDURE create_employeeS_audit_after_insert();
/* update triggers after update TRiger func*/
CREATE OR REPLACE FUNCTION log_salary_change() 
RETURNS TRIGGER

AS 
$$
BEGIN
   
     INSERT INTO salaries_ch(e_id,old_salary,new_salary)
	 VALUES(NEW.id,OLD.salary,NEW.salary);

	

	   RETURN NEW;

	   END;
$$ LANGUAGE plPgSQL;

/*tRIGGER update*/
CREATE TRIGGER after_update_salary_trigger
AFTER
UPDATE OF salary ON
salaries
FOR EACH ROW
EXECUTE PROCEDURE log_salary_change();




