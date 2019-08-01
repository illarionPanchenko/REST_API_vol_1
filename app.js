const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


const port = process.env.DB_CONNECTION || 3000;

const app = express();

//MIDDLEWARE

app.use(cors());

app.use(bodyParser.json());

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//ROUTES

app.get('/', (req,res)=>{
    res.send('allo ya rout HOME PAGE')
});

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>{console.log('connected to db')});

//LISTENER
app.listen(port);