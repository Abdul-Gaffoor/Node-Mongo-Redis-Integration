const express = require('express');
const mongoose = require('mongoose');
const app = express();
const client = require('./redis')


mongoose.connect("mongodb://mongo:27017/?authSource=admin")
.then(() => console.log("successfully connected to MongoDB"))
.catch((e)=> console.log(e));

client.SET('foo', 'GET method checking passed by REDIS')
client.GET('foo', (err, value) => {
  if (err) console.log(err.message)
  console.log(value)
})

app.get("/", (req,res) => {
  res.send("<h2> Hello World...!!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port,()=> console.log(`listen port ${port}`));

