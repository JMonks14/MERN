let express = require("express");
let app = express()

app.route("/shaf")
    .get(function(req,res){
        res.send("shaf, get method")
    })
    .post(function(req,res){
        res.send("shaf, post method")
    })
    .put(function(req,res){
        res.send("shaf, put method")
    })

app.listen(8030)