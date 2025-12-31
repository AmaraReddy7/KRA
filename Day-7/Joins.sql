
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

/*OuterJoin = It return all the rows from the left table and right table if they matched or not*/
SELECT Products.product_id,products.product_name, category.category_id,
category.category_name, category.category_description FROM products FULL OUTER JOIN category 
on products.category_id = category.category_id;
