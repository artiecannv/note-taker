//Importing packages
const db = require("../db/db.json");
const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");
const {createNewNote, updateDb} = require("../db/notes.js");

router.get("/notes", (req, res) => {
    let currentNotes = notes;
    res.json(currentNotes);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;


