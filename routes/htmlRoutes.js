const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = function (app) {
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
};

module.exports = router;