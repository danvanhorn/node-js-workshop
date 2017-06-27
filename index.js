const express = require('express');

var PORT = process.env.port || 8001;

var app = express();

app.listen(PORT, () => {
  console.log("listening on port: " + PORT)
});

app.get('/',(req, res) => {
  res.send("Hello, World!")
});

app.get('/birthday', (eq, res) =>{
  res.send('It\'s someone\'s birthday!!!')
});

app.get('/birthday/:name',(req, res) => {
  var name = req.params.name;
    res.send('It\'s '+ name +'\'s birthday!!!')
});
