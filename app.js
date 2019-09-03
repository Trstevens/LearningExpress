var express = require('express');
var app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs"); //sets expected rendered files to be ejs files

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this aussiedoodle?", author: "Tyler"}
    ];

    res.render("posts", {posts: posts});
});

app.listen(port, function(){
    console.log("Server started!");
});