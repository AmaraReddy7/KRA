const { Client } = require("pg");
const cors = require("cors");
const bodyparser = require("body-parser");

const express = require("express");
const app = express();
const port = 3100;
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

//connecting db
const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "Day-6",
});

con.connect().then(() => console.log("Connected to psql successfully"));

app.post("/postData", (req, res) => {
  const { name, address, id } = req.body;
  const insert_query =
    "INSERT INTO users(name, address, id) VALUES ($1, $2, $3)";
  con.query(insert_query, [name, address, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send("POSTED DATA");
    }
  });
});

app.get("/fetchData", (req, res) => {
  const fetch_query = "SELECT * FROM users";
  con.query(fetch_query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.rows);
      //res.send(result.rows[0]) getting directly 0 index
    }
  });
});

app.get("/fetchbyId/:id", (req, res) => {
  const id = req.params.id;
  const fetch_query = "SELECT * FROM users WHERE id=$1";
  con.query(fetch_query, [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.rows);
    }
  });
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;
  const update_query = "UPDATE users SET name = $1, address=$2 WHERE id = $3"; //
  con.query(update_query, [name, address, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Updated successfully");
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  try {
  } catch (error) {}
  const id = req?.params.id;
  const delete_query = "DELETE FROM USERS WHERE id = $1";
  const response = await con.query(delete_query, [id]);
  console.log(response);
});

app.listen(port, (req, res) => {
  console.log(`Server is running on  http://localhost:${port}`);
});
