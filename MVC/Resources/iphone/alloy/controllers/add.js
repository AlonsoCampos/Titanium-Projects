function Controller() {
    function addUser() {
        var users = Alloy.Collections.user;
        var model = Alloy.createModel("user", {
            name: $.name.value || "<no name>"
        });
        users.add(model);
        model.save();
        alert("Agregado");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: false,
        modal: true,
        layout: "vertical",
        title: "Add User",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    $.__views.name = Ti.UI.createTextField(function() {
        var o = {};
        _.extend(o, {
            top: "20dp",
            width: "80%",
            hintText: "name",
            borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
            returnKeyType: Ti.UI.RETURNKEY_DONE
        });
        Alloy.isTablet && _.extend(o, {
            width: "50%"
        });
        _.extend(o, {
            id: "name",
            hintText: "Nombre"
        });
        return o;
    }());
    $.__views.add.add($.__views.name);
    $.__views.__alloyId1 = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {
            width: "50%",
            top: "20dp"
        });
        Alloy.isTablet && _.extend(o, {
            width: "30%"
        });
        _.extend(o, {
            title: "Add",
            id: "__alloyId1"
        });
        return o;
    }());
    $.__views.add.add($.__views.__alloyId1);
    addUser ? $.__views.__alloyId1.addEventListener("click", addUser) : __defers["$.__views.__alloyId1!click!addUser"] = true;
    $.__views.__alloyId2 = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {
            width: "50%",
            top: "20dp"
        });
        Alloy.isTablet && _.extend(o, {
            width: "30%"
        });
        _.extend(o, {
            title: "Cancel",
            id: "__alloyId2"
        });
        return o;
    }());
    $.__views.add.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1!click!addUser"] && $.__views.__alloyId1.addEventListener("click", addUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;