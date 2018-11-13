/***********************
 **  RULES COLLECTION **
 ***********************/
var CommonRules = require('./rule-sets/CommonRules');
var CarRentRules = require('./rule-sets/CarRentRules');

exports.rules = {
    common: CommonRules.rules,
    carRent: CarRentRules.rules
};

exports.parameters = {
    common: CommonRules.parameters,
    carRent: CarRentRules.parameters
};