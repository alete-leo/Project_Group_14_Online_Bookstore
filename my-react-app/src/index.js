import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

import Client from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "BookstoreDB",
    password: "postgres",
    port: 5432,
});
// make sure you have the right info before running

db.connect();

// I'm going to try fetching all data and displaying it in a table just so we can make sure we have the data

db.query("SELECT * FROM books", (err, res) => {
    
})


ReactDOM.render(<App />, document.getElementById("root"));
// sample+3