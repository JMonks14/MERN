var mysql=require('mysql');
let express=require("express")
let app=express()
function showRecords(Request,Response){
    var con = dbconnection()

    con.connect();
    con.query("Select * from consultant",function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            console.log("connected");
            Response.writeHead(200,{'Content-Type':'text/HTML'});
            Response.write("<Table border='1'>")
            Response.write("<tr>")
            Response.write(" <td> Registration number </td>")
            Response.write(" <td> name </td>")
            Response.write(" <td> Options </td>")
            Response.write("</tr>")
            
            result.forEach(function(record){
                Response.write("<tr>")
                Response.write("<td> "+ record.regno +"</td>");
                Response.write("<td> "+record.name + "</td>");
                Response.write(`<td> <A href='http://localhost:8000/personinfo/${record.regno}/${record.name}'> personal </A>`)
                Response.write(`, <A href='http://localhost:8000/examdetails/${record.regno}'> exam </A>`)

 

                Response.write("</tr>")

 

        })
        Response.end();
    }
    });
}
let examsinformation=function(){
 

}
let personalinformation=function(req,response){
    
        let regno=req.params.regno
        let name=req.params.name

 

        var con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"",
          database:"qaconsulting"
        });

    con.connect();
    con.query(`Select * from details where regno=${regno}`,function(err,result){
        if (err){
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrr")
        }
        else{
            response.writeHead(200,{'Content-Type':'text/HTML'});
            response.write(`You are looking for the presonal details of : ${name}`)
            result.forEach(function(record){
                response.write(`<br> Address ${record.address} </br>`);
                response.write(`Post Code: ${record.postcode} </br>`);
                response.write(`City record.city </br>`);
        })
        response.end();
    }
    });
}
app.get("/dbf",function(req,res){
    showRecords(req,res)
})
let dbconnection = function () {
    var con = mysql.createConnection({
        host:"localhost",
        user:"node",
        password:"node",
        database:"qaconsulting"
      });
      return con;
}
 

app.get("/personinfo/:regno/:name",function(req,res){
    personalinformation(req,res);
})
app.get("/examdetails/:regno",function(req,res){
    console.log(" asking for exam details " + req.params.regno)
})

app.listen(8000)