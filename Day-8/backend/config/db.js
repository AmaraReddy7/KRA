const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

pool
  .connect()
  .then(() => console.log("Datebase is connected successfully"))
  .catch((err) => console.error("Datebase connection error", err.stack));

/*pool = aync() => {
    try{
        const connect = await pool.connect();
        console.log("Database is connected successfully");
    }
    catch(err){
        console.error(err);
    }

};*/

module.exports = pool;
