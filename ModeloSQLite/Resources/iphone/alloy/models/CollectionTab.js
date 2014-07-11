exports.definition = {
    config: {
        columns: {
            name: "String",
            score: "Int"
        },
        defaults: {
            name: "<no name>",
            score: 0
        },
        adapter: {
            type: "properties",
            collection_name: "collection"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("collectionTab", exports.definition, []);

collection = Alloy.C("collectionTab", exports.definition, model);

exports.Model = model;

exports.Collection = collection;