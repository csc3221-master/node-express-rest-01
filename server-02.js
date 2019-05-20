// Make sure to install body-parser: npm install body-parser --save

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

// Support json enconded bodies
app.use(bodyParser.json());    
// Support encoded bodies    
app.use(bodyParser.urlencoded({extended: true}));

app.post('/addStudent', function (request, response) {
  var filename = __dirname + "/" + "students2.json";
  var jsonData;
  var newStudent;
  newStudent = {
    name: request.body.studentName,
    major: request.body.studentMajor,
    id: request.body.studentId
  };
  // First read existing users.
  fs.readFile(filename , 'utf8', function (err, data) {
    data = JSON.parse( data );
    var position = data["data"].length;
    data["data"][position] = newStudent;
    jsonData = JSON.stringify(data);
    console.log( data );
    fs.writeFile(filename, jsonData, 'utf8', function(err, data){

    });
    response.end( jsonData);
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})