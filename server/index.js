const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

app.post("/post", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;

  db.query(
    "INSERT INTO tb_data (name, age, country) VALUES (?,?,?)",
    [name, age, country],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM tb_data";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.listen(4000, () => {
  console.log("now app run on 4000");
});
