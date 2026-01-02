/*Index select queries*/
SELECT indexname, indexdef from pg_indexes WHERE tablename = 'contacts'; /*It shows all the indexes and its def for table*/