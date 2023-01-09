const db = require("../db/db.json");
const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");
const {createNewNote, updateDb} = require("../db/notes.js");





