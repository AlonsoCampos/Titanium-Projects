exports.definition = {
    config: {
        adapter: {
            type: "sql",
            collection_name: "fighters",
            db_file: "/myapp.sqlite",
            db_name: "fighters",
            idAttribute: "id",
            remoteBackup: false
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("fighters", exports.definition, [ function(migration) {
    migration.name = "fighters";
    migration.id = "201209301904312";
    migration.up = function() {};
    migration.down = function(migrator) {
        migrator.dropTable("fighters");
    };
}, function(migration) {
    migration.name = "fighters";
    migration.id = "201301161234567";
    migration.up = function(migrator) {
        for (var i = 0; 5 > i; i++) migrator.insertRow({
            name: "Migration " + (i + 1),
            nickname: "nickname"
        });
    };
    migration.down = function(migrator) {
        for (var i = 0; 5 > i; i++) migrator.deleteRow({
            name: "Migration " + (i + 1),
            nickname: "nickname"
        });
    };
} ]);

collection = Alloy.C("fighters", exports.definition, model);

exports.Model = model;

exports.Collection = collection;