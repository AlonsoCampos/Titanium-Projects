exports.definition = {
    config: {
        columns: {
            nombre: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "usuario"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("usuario", exports.definition, []);

collection = Alloy.C("usuario", exports.definition, model);

exports.Model = model;

exports.Collection = collection;