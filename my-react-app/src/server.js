// updated from index.js to server.js

import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "BookstoreDB",
    password: "postgres",
    port: 5432,
});
// make sure you have the right info before running

db.connect();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// I'm going to try fetching all data and displaying it in a table just so we can make sure we have the data

db.query("SELECT * FROM books", (err, res) => {
    
})


// ReactDOM.render(<App />, document.getElementById("root"));
// sample