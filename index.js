const express = require("express")
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    res.send('Olá mundo 2');
})

//Serve website
//app.use(express.static(path.join(__dirname, "public")));
/*
//Client side routing fix on page refresh or direct browsing to non-root directory
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
*/
app.get('/name', callName); //http://localhost:3000/name?firstname=Mike
function callName(req, res) { 
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./process/hello.py", 
    req.query.firstname, 
    req.query.lastname] ); 
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
}

app.listen(3000, () => {
    console.log("Rodando")
})