exports.definition = {
    config: {}
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("empty", exports.definition, []);

collection = Alloy.C("empty", exports.definition, model);

exports.Model = model;

exports.Collection = collection;