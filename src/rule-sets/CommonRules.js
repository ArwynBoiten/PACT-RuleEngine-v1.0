/*****************************
 **  COMMON RULE COLLECTION **
 *****************************/

var mininumAgeRule = {
    "name": "Controleer of persoon schoonmaker is.",
    "condition": function (R) {
        R.when(this.beroep == "schoonmaker");
        this.result = false;
    },
    "consequence": function (R) {
        this.result = true;
        this.reason = "Persoon is schoonmaker.";
        R.stop();
    }
};

var rules = [
    mininumAgeRule
];

var parameters = [
    {
        mininumAgeRule: {
            name: "age",
            label: "Leeftijd",
            type: "number",
            description: "Controleer of persoon 21 jaar of ouder is."
        }
    }
];

exports.rules = rules;
exports.parameters = parameters;