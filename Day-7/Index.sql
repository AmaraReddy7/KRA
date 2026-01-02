/* WHile fetching the queries if the table contains 10000 of rows at that point of it would be slow
of fetching the where condition while adding index to that respective column it would locate the matching record much faster
The main purpose of indexes we can enhance the query performance.
*/
/* Crea5ting Index on table*/
CREATE INDEX contacts_name ON contacts(contact_name);   

/* Unique indexes : It enforces unique values in one or multiple columns*/

CREATE UNIQUE INDEX contacts_phone ON contacts(phone); 

/*For multiple columns unique value*/
CREATE UNIQUE INDEX work_phone_extension ON contacts(work_phone,extension);

/*For expressions */
CREATE INDEX customer_lastname ON customers(LOWER(last_name));

/*For paritial Index*/
CREATE INDEX customer_active ON customers(active) WHERE active = 0;

/*Hash index*/
CREATE INDEX customer_lastname ON customers USING HASH(last_name);