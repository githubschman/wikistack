/////APP.JS////
'use strict'

const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

//require our models:
const Models = require('./models')
 

const app = express();

//routes needs to be a middleware function:
app.use('/', routes) //for any routes go to the routes directory

//use any file in the public folder
app.use(express.static('public'));

///////
//Without the body parser, the request body will be undefined:
//////

//middleware that unzips incoming requests from the URL (params)
app.use(bodyParser.urlencoded({ extended: false }))
//returns middleware that only parses JSON 
//post and put requests have body object req.body
app.use(bodyParser.json());

//.sync-ing the models so we can talk to the database:

//sync the database
Models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, ()=>{
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

// this drops all tables then recreates them based on our JS definitions
Models.db.sync({force: true})

