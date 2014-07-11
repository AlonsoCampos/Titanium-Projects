exports.definition = {
    config: {
        columns: {
            id: "String",
            count: "Int"
        },
        defaults: {
            id: "instance",
            count: 0
        },
        adapter: {
            type: "properties",
            collection_name: "singleModel"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("modelTab", exports.definition, []);

collection = Alloy.C("modelTab", exports.definition, model);

exports.Model = model;

exports.Collection = collection;