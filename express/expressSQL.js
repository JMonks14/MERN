let express = require("express");
let app = express()
let mysql = require("mysql")

function showAllRecords(req,res) {
    
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
            res.writeHead(200,{'Content-Type': 'text/HTML'})
            res.write(`<Table border="1"></Table>`)
            res.write(`<tr><td>Reg number</td><td>Name</td></tr>`)
            results.forEach(record => {
                console.log(record.regno + "..." + record.name + "..." + record.marks);
                
            });
        }
    })

}

app.get("/showrecords", function(req,res){
    showAllRecords(req,res)
})

app.listen(8030)