import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

//const app = express();
//const port = 3000;

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


// I tried to merge this with the jsx, but didn't think of how the frontend framework would crash. 