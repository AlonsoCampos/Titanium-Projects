exports.definition = {
    config: {
        columns: {
            title: "TEXT",
            author: "TEXT"
        },
        defaults: {
            title: "-",
            author: "-"
        },
        adapter: {
            type: "sql",
            collection_name: "books",
            idAttribute: "title"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("title" === key && 0 >= value.length) return "Error: No title!";
                    if ("author" === key && 0 >= value.length) return "Error: No author!";
                }
            },
            customProperty: "book",
            customFunction: function() {
                Ti.API.info("I am a book model.");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(book) {
                return book.get("title");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("book", exports.definition, []);

collection = Alloy.C("book", exports.definition, model);

exports.Model = model;

exports.Collection = collection;