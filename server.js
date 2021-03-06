//Dependecies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Reservations and Waitlist variables
const tableRequests = [];
const tables = [];
const waitList = [];


//Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});


//Create new table request
app.post("/api/tablerequests", function(req, res) {
    let newTable = req.body;
    console.log(newTable);
    tableRequests.push(newTable);
    if (tableRequests.length<6) {
        tables.push(newTable);
    }
    else {
        waitList.push(newTable);
    }
    res.json(newTable);
  });


//Server is listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
