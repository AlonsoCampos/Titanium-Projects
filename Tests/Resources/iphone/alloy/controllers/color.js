function Controller() {
    function openLink() {
        var win = Ti.UI.createWindow({
            fullscreen: false
        });
        win.add(Ti.UI.createWebView({
            url: model.get("link")
        }));
        Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "color";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.color = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: false,
        title: "Color Info",
        id: "color"
    });
    $.__views.color && $.addTopLevelView($.__views.color);
    $.__views.infoContainer = Ti.UI.createView({
        top: "0dp",
        left: "10dp",
        right: "10dp",
        bottom: "60dp",
        layout: "vertical",
        id: "infoContainer"
    });
    $.__views.color.add($.__views.infoContainer);
    $.__views.theColor = Ti.UI.createView({
        top: "15dp",
        height: "80dp",
        width: "80%",
        id: "theColor"
    });
    $.__views.infoContainer.add($.__views.theColor);
    $.__views.name = Ti.UI.createLabel({
        color: "#000",
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        top: "30dp",
        id: "name"
    });
    $.__views.infoContainer.add($.__views.name);
    $.__views.hexCode = Ti.UI.createLabel({
        color: "#000",
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        top: "15dp",
        id: "hexCode"
    });
    $.__views.infoContainer.add($.__views.hexCode);
    $.__views.wavelength = Ti.UI.createLabel({
        color: "#000",
        textAlign: "center",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        top: "15dp",
        id: "wavelength"
    });
    $.__views.infoContainer.add($.__views.wavelength);
    $.__views.learnmore = Ti.UI.createLabel({
        color: "#fff",
        height: "40dp",
        width: "80%",
        bottom: "10dp",
        backgroundColor: "#222",
        borderColor: "#000",
        borderRadius: 8,
        borderWidth: 2,
        textAlign: "center",
        text: "Want to learn more?",
        id: "learnmore"
    });
    $.__views.color.add($.__views.learnmore);
    openLink ? $.__views.learnmore.addEventListener("click", openLink) : __defers["$.__views.learnmore!click!openLink"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var model = arguments[0];
    $.theColor.backgroundColor = model.get("color");
    $.name.text = "Name: " + model.get("color");
    $.hexCode.text = "Hex: " + model.get("hexCode");
    $.wavelength.text = "Wavelength: " + model.get("wavelength");
    __defers["$.__views.learnmore!click!openLink"] && $.__views.learnmore.addEventListener("click", openLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;