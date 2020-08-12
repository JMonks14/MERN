var http=require("http")
var URL=require("url")

let requestProcessing= function(request, response) {
    
    let myurl=URL.parse(request.url,true)
    console.log(myurl);
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (myurl.pathname=="/") {
        for (let a=1; a<=10;a++) {
            response.write(`<a href=http://localhost:8020/timestable?tt=${a}>${a}</a>`)
            response.write(`<br>`)
        }
        response.end()
    }
    if (myurl.pathname=="/timestable") {
        response.write(`<a href=http://localhost:8020>Home</a>`)
        response.write("<h5>Your times table is:</h5>")
        let number = myurl.query.tt
        response.write("<table>")
       
        for (let x=1; x<=20; x++) {
            response.write("<tr>")
            response.write(`<td>${x} x ${number} = </td><td>`)
            response.write(`${number*x}`)
            response.write("</td>")
            response.write("</tr>")
        }
        response.write("</table>")
        response.end()
        

    }
}
let server = http.createServer(requestProcessing)

server.listen(8020)