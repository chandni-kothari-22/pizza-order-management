var express = require('express');  
var app = express();  
  
app.use(express.static("app"));  
  
app.get('/', function (req, res) {
    
});
  
app.listen(1337, '127.0.0.1');  
console.log("MyProject Server is Listening on port 8080");  