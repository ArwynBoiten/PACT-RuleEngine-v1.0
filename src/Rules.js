/***********************
 **  RULES COLLECTION **
 ***********************/

var ageRule = {
    "condition": function (R) {
        R.when(this.age < 18);
    },
    "consequence": function (R) {
        this.result = false;
        this.reason = "The transaction was blocked because the person is younger then 18.";
        R.stop();
    }
};

exports.list = {
    groups: [
        {
            common: [
                { ageRule: ageRule },
            ]
        }
    ]


};