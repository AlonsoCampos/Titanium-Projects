function Controller() {
    function addModel() {
        Alloy.Models.book;
        data.set("title", $.title.value);
        data.set("author", $.autor.value);
        var t = drama.get("title");
        var fila = Ti.UI.createTableViewRow({
            title: t
        });
        data.push(fila);
        $.table.setData(data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Models.instance("book");
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.index.add($.__views.table);
    $.__views.title = Ti.UI.createTextField({
        hintText: "Titulo",
        id: "title",
        top: "50"
    });
    $.__views.index.add($.__views.title);
    $.__views.autor = Ti.UI.createTextField({
        hintText: "Autor",
        id: "autor"
    });
    $.__views.index.add($.__views.autor);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Add",
        top: "70",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    addModel ? $.__views.__alloyId2.addEventListener("click", addModel) : __defers["$.__views.__alloyId2!click!addModel"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var drama = Alloy.Models.book;
    drama.set("title", "Hamlet");
    drama.set("author", "William Shakespeare");
    var title = drama.get("title");
    var row = Ti.UI.createTableViewRow({
        title: title
    });
    data.push(row);
    $.table.setData(data);
    $.index.open();
    __defers["$.__views.__alloyId2!click!addModel"] && $.__views.__alloyId2.addEventListener("click", addModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;