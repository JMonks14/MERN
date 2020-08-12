let ref=require("http")
let server=ref.createServer(function (req,res) {
    console.log(req.url);
})
server.listen(8001)