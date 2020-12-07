const express = require('express')
const app = express()
const port = 3000

var path    = require("path");

app.use('/style', express.static('style'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/', (req, res) => {
  res.send('Practica 1 Software avanzado vacaciones dec 2020000')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
