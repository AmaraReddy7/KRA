/*Create Views */
CREATE VIEW empl AS SELECT id,name,salary FROM salaries;

/* Creating views on joins*/

CREATE VIEW procat AS SELECT product_id, product_name,  category_id, category_name,category_description FROM 
products INNER JOIN category USING(category_id);

/* Drop views*/
DROP VIEW procat;
