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
const tables = [];
const waitList = [];

//Routes
app.get("/", function(req, res) {
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


//Create new table




//Create new waitlist




//Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


//This will go in the reservations.html page
$("#submit").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
      name: $("#name").val().trim(),
      phone: $("#phone").val().trim(),
      email: $("#email").val().trim(),
      id: $("#id").val().trim(),
    };
    if (tables.length < 5) {
        $.post("/api/tables", newReservation)
        .then(function(data) {
          console.log(`Adding table: ${data}`);
        });
    } else {
        $.post("/api/waitlist", newReservation)
        .then(function(data) {
          console.log(`Adding to wait list: ${data}`);
        });
    }
    // Question: What does this code do??

  });