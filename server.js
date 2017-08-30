const express = require('express')
const uuidv1 = require('uuid/v1');
const app = express()
let database = {}

app.get('/create', function(req, res){
    const newAnimal = {
      name: 'tom',
      type: 'cat'
    }
    const id = uuidv1()
    database[id] = newAnimal
    res.json(id)
})

app.get('/get-all', function(req,res){
  res.json(database)
})

app.get('/', function(req, res){
  res.send('Como estas?')
})

app.listen(4560, function(){
  console.log('listening on port 4560!')
})
