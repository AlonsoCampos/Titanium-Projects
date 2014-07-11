function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.socialWin = Ti.UI.createWindow({
        id: "socialWin"
    });
    $.__views.socialWin && $.addTopLevelView($.__views.socialWin);
    $.__views.__alloyId0 = Ti.Facebook.createLoginButton({
        ns: Ti.Facebook,
        id: "__alloyId0"
    });
    $.__views.socialWin.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = Ti.UI.createWindow({
        backgroundColor: "white"
    });
    var fb = require("facebook");
    fb.appid = 0x53b8c14efb2f0;
    fb.permissions = [ "publish_stream" ];
    fb.addEventListener("login", function(e) {
        e.success && alert("Logged in");
    });
    fb.addEventListener("logout", function() {
        alert("Logged out");
    });
    win.add(fb.createLoginButton({
        top: 50,
        style: fb.BUTTON_STYLE_WIDE
    }));
    win.open();
    $.socialWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;