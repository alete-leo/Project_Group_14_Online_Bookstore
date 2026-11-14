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


ReactDOM.render(<App />, document.getElementById("root"));
// sample