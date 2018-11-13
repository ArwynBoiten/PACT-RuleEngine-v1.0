/*****************************
 **  COMMON RULE COLLECTION **
 *****************************/
var rules = [
    {
        "name": "Controleer of huurder 21 jaar of ouder is.",
        "condition": function (R) {
            R.when(this.age >= 21);
            this.result = false;
        },
        "consequence": function (R) {
            this.result = true;
            this.reason = "Huurder is 21 jaar of ouder.";
            R.stop();
        }
    },

    {
        "name": "Controleer of huurder juiste rijbewijs heeft.",
        "condition": function (R) {
            R.when(this.licenseType === "B");
            this.result = false;
        },
        "consequence": function (R) {
            this.result = true;
            this.reason = "Huurder beschikt over een B-rijbewijs.";
            R.stop();
        }
    },
    {
        "name": "Bereken borgprijs op basis van gehuurd object.",
        "condition": function (R) {
            R.when(this.object.price > 0);
            this.result = false;
        },
        "consequence": function (R) {
            this.result = true;
            this.reason = "Huurder betaald een borgbedrag van 1%: " + (this.object.price * 0.01) + " euro.";
            R.stop();
        }
    },
    {
        "name": "Beschrijf gehuurde object.",
        "condition": function (R) {
            R.when(this.object.name != null && this.object.kenmerk);
            this.result = false;
        },
        "consequence": function (R) {
            this.result = true;
            this.reason = "Object aangeboden door verhuurder: "+ this.object.name + " met " + this.object.kenmerk + ".";
            R.stop();
        }
    }
];


var parameters = {
    roles: [
        {
            owner: [
                {
                    License: {
                        name: "licenseType",
                        label: "Rijbewijs",
                        type: "char",
                        description: "Controleer of huurder juiste rijbewijs heeft."
                    }
                }
            ]
        },
        {
            renter: [
                {
                    checkDriverLicense: {
                        name: "licenseType",
                        label: "Rijbewijs",
                        type: "char",
                        description: "Controleer of huurder juiste rijbewijs heeft."
                    }
                }
            ]
        }
    ],
    member_size: 2
};

exports.rules = rules;
exports.parameters = parameters;