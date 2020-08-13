let express = require("express");
let app = express()

let londonrequest=function(req,res) {
    res.write("Welcome to London");
    res.send("")
}


app.get("/qa", function (req,res) {
    console.log("QA request recieved");
})

let reply = function(res){
    res.write("hello")
    res.write(" folks")
    res.end()
}

app.get(["/one","/two","/three"], function(req,res) {
    reply(res)

})

app.get("/london", londonrequest)


app.listen(8030)