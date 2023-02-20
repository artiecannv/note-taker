const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const {v4:uuidv4} = require("uuid");
const db = require("./db/db.json");

//Parsing data from Strings, Arrays, and JSON
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Welcome!`);
  });