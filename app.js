const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const messageRoutes = require('./routes/message');

app.use(bodyParser.urlencoded({extended: false}));

app.use(messageRoutes);


  app.listen(2500);
   
