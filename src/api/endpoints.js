/*********************************
 **  ENDPOINTS FOR RULE-ENGINE  **
 *********************************/

var express = require('express');
var router = express.Router();
var RuleEngine = require('./../RuleEngine');

router.route('/preset/:group')
    .post(function(req, res) {
        RuleEngine.runRules(req.body, req.params.group, function (data) {
            res.send(data);
        });
        console.log("[HTTP Server] Call on endpoint /rules [POST]")
    })
    .get(function (req, res) {
        res.send(RuleEngine.getRules(req.params.group));
    });

router.route('/preset')
    .get(function (req, res) {
       res.send(RuleEngine.getSets());
    });

exports.router = router;