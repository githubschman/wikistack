////ROUTES.JS/////
'use strict'

const express = require('express');
const router = express.Router();
//router is a middleware function that includes all of the express.Router functions



router.get('/', function(req,res,next){
    res.send('this is definitely working!');
})

module.exports = router;