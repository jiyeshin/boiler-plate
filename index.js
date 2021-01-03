const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:1234@cluster0.zmn88.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true
}).then(()=>console.log('몽고디비 연결'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('안녕안녕')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})