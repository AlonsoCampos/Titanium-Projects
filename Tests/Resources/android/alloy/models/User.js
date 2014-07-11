exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            name: "TEXT",
            color: "TEXT"
        },
        adapter: {
            type: "sql",
            db_name: "users",
            collection_name: "users",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("user", exports.definition, [ function(migration) {
    migration.name = "user";
    migration.id = "201209301904312";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                id: "INTEGER PRIMARY KEY AUTOINCREMENT",
                name: "TEXT",
                color: "TEXT"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("users");
    };
}, function(migration) {
    migration.name = "user";
    migration.id = "201301161234567";
    var users = [ {
        name: "Tony",
        color: "blue"
    }, {
        name: "Chris",
        color: "red"
    }, {
        name: "Christian",
        color: "blue"
    }, {
        name: "Ingo",
        color: "orange"
    } ];
    migration.up = function(migrator) {
        for (var i = 0; users.length > i; i++) migrator.insertRow(users[i]);
    };
    migration.down = function(migrator) {
        for (var i = 0; users.length > i; i++) migrator.deleteRow(users[i]);
    };
} ]);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;