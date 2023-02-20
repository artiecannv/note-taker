const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("./db/db.json");

//Parsing data from Strings, Arrays, and JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! TODO: get route for api/notes page (loads notes.html from public)
//! TODO: post route for api/notes to create new note
//* TODO: save function for any changes

const saveFunction = (notes) => {
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

//* TODO: get route for home page
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//* TODO: get route for notes page (pulls from json db)
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});


//* TODO: delete route, for deletion

app.delete("/notes/:id", (req, res) => {
  const noteIndex = db.findIndex((currentIndex) => {
    return currentIndex.id === req.params.id;
  });
  const tempDb = db;
  tempDb.splice(currentIndex, 1);
  saveFunction(tempDb);
  return res.json(`${req.params.id} has been deleted`);
});


















app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}. Welcome!`);
});
