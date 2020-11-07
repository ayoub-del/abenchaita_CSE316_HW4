var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost", 
user: "root",
 password: "pass4root", 
 port: 3306,
 database: "cse316"
}); 

var express = require("express");
var url = require("url");
var app = express(); 

app.get("/", function (req,res){
    writeSearch(req,res);
});

app.get("/schedule", function (req,res){
    writeSchedule(req,res);
});

app.listen(3000, function (){
    console.log("Server Started");
  });

function writeSearch(req,res){
res.writeHead(200, { "Content-Type": "text/html" });
let query = url.parse(req.url, true).query; 
let search = query.search ? query.search : ""; 
let filter = query.filter ? query.filter : "";
let response = `
<!DOCTYPE html> 
<html lang = "en"> 
<head> 
    <title> Spring 2021 CSE Class Find </title>
</head>

<body> 

<div style="display:inline-block;vertical-align:middle">
    <img src="https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/stonybrook.jpg" width="250" height="120">
</div>
<div style="display:inline-block;">
    <h2> &nbsp; &nbsp; CSE Class Find</h2>
</div> <br>
<form method ="get" action ="/">
<b> Search </b> <input type="text" name="search" value="">
<select name ="filter"> 
    <option value="allFeilds"> All Fields</option>
    <option value="courseName"> Course Title</option>
    <option value="courseNum"> Course Number</option> 
    <option value="instructor">Instructor</option> 
    <option value="day"> Day</option>   
    <option value="time">Time</option>   
</select>
<input type="submit" value="Search">
<br>
Example Searches: 316, fodor, 2:30 PM, MW
</Form>
</body>
</html>
`;
res.write(response);
res.end();



}