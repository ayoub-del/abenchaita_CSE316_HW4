var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost", 
user: "root",
 password: "pass4root", 
 port: 3306,
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
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Stony_Brook_U_logo_horizontal.svg/1280px-Stony_Brook_U_logo_horizontal.svg.png" width="300" height="75">
</div>
<div style="display:inline-block;">
    <h2> &nbsp; &nbsp; CSE Class Find</h2>
</div>
<br></br>
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
<br></br>
<ol>
`;

let sql = "SELECT * FROM cse316.classes;"
con.query(sql, function (err, result){
if(err) throw err;
for (let x of result){
    response +=`
    <li>
    <b> CSE ` + x.CRS + ` - ` +
    x.Title + ` - ` + x.Cmp + ` - Section ` + x.Sctn +`</b>
    <pre> 
        Days:                    `+ x.Days + `
        Start Time:              `+ x.Start_Time + `
        End Time:                `+ x.End_Time + `
        Start Date:              `+ x.Mtg_Start_Date + `
        End Date:                `+ x.Mtg_End_Date + `
        Duration:                `+ x.Duration +` 
        Instruction Mode:        `+ x.Instruction_Mode +`
        Building:                `+ x.Building +` 
        Room:                    `+ x.Room +`
        Instructor:              `+ x.Instructor +`
        Enrollment Cap:          `+ x.Enrl_Cap + `
        Waitlist Cap:            `+ x.Wait_Cap + `
        Combined Description:    `+ x.Cmbnd_Descr +`
        Combined Enrollment Cap: `+ x.Cmbnd_Enrl_Cap +`
        <form action="/schedule" method ="get">
        <button name="add" value="` + [x.CRS,x.Sctn] + `"> Add Class </button></form> </pre>
    </li>`

    

}
res.write(response + "</ol>\n\n</body>\n</html>");
res.end();

});


};