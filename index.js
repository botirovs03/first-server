const express = require("express");

const app = express();
const cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

//create mysql connection

var mysql = require('mysql');
const res = require("express/lib/response");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});





//define port
const port=3000;
app.use(express.static('public'));

app.get("/outword", (req, res) => {

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM firstdb.dict;", function (err, result) {
      if (err) throw err;
      // console.log("Result: " + result[0].Eng + "-" + result[0].Jap);
      res.json(result);
    });
    
  });


})


//get examplessssssssssvsss

app.get("/get", (req, res) => {
const q=req.query;
res.json({message:'Get JSON Example',name:q.name})

})

//post example
app.post('/post', (req, res) => {

res.json({message:'Post JSON Example'})

})

app.post('/post-data1', (req, res) => {
const q=req;
res.json({message:'Post JSON Example',name:q})

})

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/po', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
    return 0;
});


//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});