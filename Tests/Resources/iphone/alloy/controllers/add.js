function Controller() {
    function closeKeyboard(e) {
        e.source.blur();
    }
    function setColor(e) {
        selectedColor = e.source.id;
        _.each(colors, function(color) {
            $[color].borderWidth = e.source.id === color ? 4 : 0;
        });
    }
    function addUser() {
        var users = Alloy.Collections.user;
        var model = Alloy.createModel("user", {
            name: $.name.value || "<no name>",
            color: selectedColor
        });
        users.add(model);
        model.save();
        closeWindow();
    }
    function closeWindow() {
        $.add.close();
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
            hintText: "name"
        });
        return o;
    }());
    $.__views.add.add($.__views.name);
    closeKeyboard ? $.__views.name.addEventListener("return", closeKeyboard) : __defers["$.__views.name!return!closeKeyboard"] = true;
    $.__views.colorContainer = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: "80%",
        top: "25dp",
        layout: "horizontal",
        id: "colorContainer"
    });
    $.__views.add.add($.__views.colorContainer);
    $.__views.blue = Ti.UI.createView({
        height: "80dp",
        width: "25%",
        left: "6.33%",
        borderColor: "#000",
        borderRadius: 8,
        borderWidth: 4,
        backgroundColor: "blue",
        id: "blue"
    });
    $.__views.colorContainer.add($.__views.blue);
    setColor ? $.__views.blue.addEventListener("click", setColor) : __defers["$.__views.blue!click!setColor"] = true;
    $.__views.red = Ti.UI.createView({
        height: "80dp",
        width: "25%",
        left: "6.33%",
        borderColor: "#000",
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: "red",
        id: "red"
    });
    $.__views.colorContainer.add($.__views.red);
    setColor ? $.__views.red.addEventListener("click", setColor) : __defers["$.__views.red!click!setColor"] = true;
    $.__views.orange = Ti.UI.createView({
        height: "80dp",
        width: "25%",
        left: "6.33%",
        borderColor: "#000",
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: "orange",
        id: "orange"
    });
    $.__views.colorContainer.add($.__views.orange);
    setColor ? $.__views.orange.addEventListener("click", setColor) : __defers["$.__views.orange!click!setColor"] = true;
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
    closeWindow ? $.__views.__alloyId2.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId2!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var colors = [ "blue", "red", "orange" ];
    var selectedColor = "blue";
    __defers["$.__views.name!return!closeKeyboard"] && $.__views.name.addEventListener("return", closeKeyboard);
    __defers["$.__views.blue!click!setColor"] && $.__views.blue.addEventListener("click", setColor);
    __defers["$.__views.red!click!setColor"] && $.__views.red.addEventListener("click", setColor);
    __defers["$.__views.orange!click!setColor"] && $.__views.orange.addEventListener("click", setColor);
    __defers["$.__views.__alloyId1!click!addUser"] && $.__views.__alloyId1.addEventListener("click", addUser);
    __defers["$.__views.__alloyId2!click!closeWindow"] && $.__views.__alloyId2.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;