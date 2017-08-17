const express = require('express')
const app = express()

app.get('/', function(req, res){
  res.send('Como estas?')
})

app.listen(4560, function(){
  console.log('listening on port 4560!')
})
