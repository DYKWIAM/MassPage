import express from "express";
import mysql from "mysql";
import session from "express-session";
import cors from "cors";
import { promisify } from "util";
import apiRegister from "./api-register.js";

const server = express();

const port = 3000;

server.use(cors());

server.use(express.json());
server.use(
  session({
    secret: "keyboard_cat",
    resave: false,
    saveUninitialized: false,
  })
);
server.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection({
  host: "161.97.144.27",
  port: "8018",
  user: "root",
  password: "playfulpenguinslides",
  database: "galaEmporium",
});

db.query = promisify(db.query).bind(db);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");

  // serve static client directory
  server.use(express.static("../client"));

  // connect to API:s
  apiRegister(server, db);

  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
});
