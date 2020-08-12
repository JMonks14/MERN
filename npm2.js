let ref=require("http")
let requestProcessor = function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if (req.url=="/"){     
    res.write("<h2>Hello</h2> ")
    res.write("friends ")
    res.end()
}
    if (req.url=="/QA") {    
        res.write("<h6>Welcome to QA limited</h6>")
        res.write('<A href="http://localhost:8001/">QA</A>')
        res.end()
    }
}
let server=ref.createServer(requestProcessor)
server.listen(8001)