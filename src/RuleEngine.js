/*****************************
 **  RULE ENGINE MODULE  **
 *****************************/

var RuleEngine = require("node-rules");
var Rules = require("./Rules");
var R = new RuleEngine();

function runRuleEngine(fact, callback){
    R.execute(fact, function (data) {
        if (data.result) {
            console.log("[RULE ENGINE] Rules executed successful.");
        } else {
            console.error("[RULE ENGINE] Blocked, Reason:" + data.reason);
        }
        return callback(data);
    });
};

/* Make the following methods available to import in app.js */
module.exports = {

    runRules: function(facts, callback) {
        for(var i = 0; i < Rules.list.length;i++) {
            R.register(Rules.list[i]);
        }

        runRuleEngine(facts, function(response){
            return callback(response);
        });
    },

    runRulesByGroup: function(facts, group, callback) {
        for(var i = 0; i < Rules.list.groups.group.length;i++) {
            R.register(Rules.list.groups.group[i]);
        }

        runRuleEngine(facts, function(response){
            return callback(response);
        });
    },


    getRules: function(){
        return Rules.list;
    }
};