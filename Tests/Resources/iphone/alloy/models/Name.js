exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            name: "TEXT"
        },
        adapter: {
            type: "sql",
            db_name: "name",
            collection_name: "name",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("name", exports.definition, []);

collection = Alloy.C("name", exports.definition, model);

exports.Model = model;

exports.Collection = collection;