const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// app.get("/", (req, res) => {
//   return res.json({
//     group: "twice",
//     member: 9,
//     nation: "korea japan taiwan",
//   });
// });

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM tb_data";
  db.query(sql, (err, wow) => {
    if (err) return res.json(err);
    return res.json(wow);
  });
});

app.listen(4000, () => {
  console.log("now app run on 4000");
});
