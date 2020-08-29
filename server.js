// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');// generates random id
const Tables = require('./classes/tables');
const dummydata = require('./classes/dummydata');

const reservations = [];
const tableArr = [];
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
    return res.json(tableArr);
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post("/api/reserve", (req, res) => {
    // send reservation data
    console.log(req.body);
   // res.send(req.body);
    const { name, phone, email } = req.body;
    const newTable = new Tables(name, phone, email, uuidv4());

    if (tableArr.length >= 5) {
        // create instance of Table clas and add to waitlist arr

        waitlist.push(newTable);
        console.log(newTable);

        res.send("You are on the waitlist for a table.");

    } else {
        // create new instance of Tables class with req.body.name, etc and add to tables array
        tableArr.push(newTable);
        // send back message
        res.send("Your reservation was successful. You now have a table ready for you.")
    }
})

// Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newCharacter);

//     characters.push(newCharacter);

//     res.json(newCharacter);
//   });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});