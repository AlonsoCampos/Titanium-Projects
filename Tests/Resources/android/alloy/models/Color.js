exports.definition = {
    config: {
        adapter: {
            type: "sql",
            db_file: "/dbs/colors.sqlite",
            collection_name: "colors"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("color", exports.definition, [ function(migration) {
    migration.name = "color";
    migration.id = "201209301904312";
    var colors = [ {
        color: "blue",
        link: "http://en.wikipedia.org/wiki/Blue",
        hexCode: "#0000ff",
        wavelength: "450 to 495 nm"
    }, {
        color: "red",
        link: "http://en.wikipedia.org/wiki/Red",
        hexCode: "#ff0000",
        wavelength: "-620 to -740 nm"
    }, {
        color: "orange",
        link: "http://en.wikipedia.org/wiki/Orange_(colour)",
        hexCode: "#ff7f00",
        wavelength: "590 to 620 nm"
    } ];
    migration.up = function(migrator) {
        for (var i = 0; colors.length > i; i++) migrator.insertRow(colors[i]);
    };
    migration.down = function(migrator) {
        migrator.dropTable("colors");
    };
} ]);

collection = Alloy.C("color", exports.definition, model);

exports.Model = model;

exports.Collection = collection;