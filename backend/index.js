const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require("./config/key");

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/api/hello', (req,res) => {
  res.send('Test')
})

app.use('/', require('./routes/user'));

app.listen(port, () => {
  console.log(`🌻  ${port} 🌻`)
})