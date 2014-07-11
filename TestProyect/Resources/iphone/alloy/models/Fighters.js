exports.definition = {
    config: {
        columns: {
            name: "TEXT",
            nickname: "TEXT",
            fighterId: "TEXT PRIMARY KEY"
        },
        adapter: {
            type: "sql",
            collection_name: "fighters",
            idAttribute: "fighterId"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("fighters", exports.definition, [ function(migration) {
    migration.name = "fighters";
    migration.id = "201209301904312";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                name: "TEXT",
                nickname: "TEXT",
                fighterId: "TEXT PRIMARY KEY"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("fighters");
    };
} ]);

collection = Alloy.C("fighters", exports.definition, model);

exports.Model = model;

exports.Collection = collection;