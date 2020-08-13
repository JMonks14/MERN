let express = require("express");
let app = express()

let row = ["James", "Simon", "Rosie", "Will", "Sheridan"]
app.get("/", (req,res) => {
    res.send("Hello, my name is JM!")
    res.end()
})

app.get("/getAll", (req,res) => {
    
        res.send("The names are " + row)
   
    res.end()
})

app.get("/getName/:n", (req,res) => {
    let n=req.params.n
    res.send("The name is " + row[n])
    res.end()
})

app.delete("/delName/:n", (req,res) => {
    let n = req.params.n
    
    res.send(row.splice(n,1) + " removed")
    
    res.end()
})

app.use(express.json());    //Put BEFORE request handling

app.post('/create', (req, res) => {
    const name = req.body.name;
    row.push(name);
    res.status(201).send(`${name} added successfully`);
});

app.post('/replace/:index', (req, res) => {
    const name = req.body.name;
    const index = req.params.index;
    const old = row[index];
    row[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});


app.listen(8030)