let express = require("express");
let app = express()

//http://localhost:8030/message/Bob

app.get("/message/:name", function(req,res) {
    res.write("hello " + req.params.name)
    res.end()
})

app.get("/maths/:opt/:n1/:n2", function(req,res){
    res.write(maths(req.params.n1,req.params.n2,req.params.opt))
    res.end()
})

let maths =function(no1=0,no2=0,opt="add") {
    let res=0
    let n1=parseInt(no1)
    let n2=parseInt(no2)
    switch(opt) {
        case "add":
            res=n1+n2
            break;
        case "sub":
            res=n1-n2
            break;
        case "mul":
            res=n1*n2
            break;
        case "div":
            res=n1/n2
            break;
        default:
            res="invalid operation"
    }
    return "result is " + res;
}

app.listen(8030)