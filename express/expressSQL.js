let express = require("express");
let app = express()
let mysql = require("mysql")

function showAllRecords() {
    
    let con=mysql.createConnection({
        host:"localhost",
        user: "node",
        password:"node",
        database: "qaconsulting"
    });
    con.connect();
    con.query("select * from consultant", function (error,results) {
        if(error) {
            console.log("something went wrong");
        } else {
            results.forEach(record => {
                console.log(record.regno + "..." + record.name + "..." + record.marks);
            });
        }
    })

}

app.get("/showrecords", function(req,res){
    showAllRecords()
})

app.listen(8030)