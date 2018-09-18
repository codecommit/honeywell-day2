var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step21-using-modules.html");
});
app.listen(2020);
console.log("server is now running on localhost:2020");