const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      mysql = require('mysql');

app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restful_db'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('MySQL Connected...');
});

app.get('/api/httpRes', (req, res) => {
    let sql = "SELECT * FROM products";
    let query = conn.query(sql, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    })
});