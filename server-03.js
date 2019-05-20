var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:position', function (request, response) {
   // First read existing students.
   fs.readFile( __dirname + "/" + "students2.json", 'utf8', function (err, data) {
      var students = JSON.parse( data );
      var student = students["data"][parseInt(request.params.position)];
      console.log( student );
      response.end( JSON.stringify(student));
   });
})

var server = app.listen(3000, function () {

   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})