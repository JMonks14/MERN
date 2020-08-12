var http=require("http")
var URL=require("url")

let server=http.createServer(function(request, response) {
    let myurl=URL.parse(request.url,true)
    console.log(myurl.query.name);
    console.log(myurl.query.address);

})

server.listen(8020)