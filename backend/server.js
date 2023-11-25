const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM nflplayers";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO nflplayers (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, res) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE nflplayers set `NAME` = ?,  `Email` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;

    db.query(sql, [...values, id], (err, res) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/nflplayers/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, res) => {
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening")
})