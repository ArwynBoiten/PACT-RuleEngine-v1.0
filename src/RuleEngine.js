/*****************************
 **  RULE ENGINE MODULE  **
 *****************************/

var RuleEngine = require("node-rules");
var Rules = require("./RuleLoader");


function executeRule(facts, rule, _index, callback) {
    var R = new RuleEngine();
    R.register(rule);
    R.execute(facts, function(_data) {
        return callback({ index: _index,  data: _data });
    });
}

/* Make the following methods available to import in app.js */
module.exports = {

    runRules: function(facts, group, callback) {

        var rules = Rules.rules[group];
        var results = [];

        rules.forEach(function(rule, index, array){
            executeRule(facts, rule, index, function (response) {
                if(response.data.result){
                    results.push(response.data.reason);
                } else {
                    var failedRule = rules[response.index].name;
                    callback("{\"error\":  \"" + failedRule + "\"}");
                }

                if(results.length == array.length){
                    callback(results);
                }
            });
        });

    },

    getRules: function(group){
        return Rules.parameters[group];
    },

    getSets: function () {
        return Rules;
    }
};