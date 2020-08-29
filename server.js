// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const Tables = require('./classes/tables');

const reservations = [];
const tables = [];
const waitlist = [];

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get('/', (req, res) => {
    // sends index/homepage
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', (req, res) => {
    // sends page with tables
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', (req, res) => {
    // sends page to make a reservation
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });