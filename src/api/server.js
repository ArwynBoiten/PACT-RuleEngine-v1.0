var app = require('express')();
var http = require('http').Server(app);
var endpoints = require('./endpoints');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*****************************************
 **  API ENGINE MODULE FOR RULE-ENGINE  **
 *****************************************/

http.listen(3020, function(){
    console.log('[HTTP Server] listening on localhost:3020');
});

app.use('/api', endpoints.router);
