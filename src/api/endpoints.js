/*********************************
 **  ENDPOINTS FOR RULE-ENGINE  **
 *********************************/

var express = require('express');
var router = express.Router();
var RuleEngine = require('./../RuleEngine');

router.get('/', function(req, res){
    res.json({endpoints: [
        {age: "/rules (all) [POST]"}
    ]});
});

router.route('/rules')
    .post(function(req, res) {
        RuleEngine.runRules(req.body, function (response) {
            res.json(response);
        });
        console.log("[HTTP Server] Call on endpoint /rules [POST]")
    })
    .get(function (req, res) {
        res.json({"message": 'This endpoint is POST-only.'});
    });



exports.router = router;