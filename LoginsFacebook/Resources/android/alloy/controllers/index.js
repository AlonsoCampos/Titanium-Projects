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
    var fb = require("facebook");
    fb.appid = 0xefd13e2f1686;
    fb.permissions = [ "read_stream" ];
    fb.forceDialogAuth = false;
    fb.addEventListener("login", function(e) {
        e.success ? alert("Logged In") : e.error ? alert(e.error) : e.cancelled && alert("Canceled");
    });
    var button = Ti.UI.createButton({
        title: "Open Feed Dialog"
    });
    button.addEventListener("click", function() {
        fb.reauthorize([ "publish_stream" ], "me", function(e) {
            e.success ? fb.dialog("feed", {}, function(e) {
                e.success && e.result ? alert("Success! New Post ID: " + e.result) : e.error ? alert(e.error) : alert("User canceled dialog.");
            }) : e.error ? alert(e.error) : alert("Unknown result");
        });
    });
    var win = Ti.UI.createWindow({
        backgroundColor: "white"
    });
    win.add(button);
    win.open();
    fb.loggedIn || fb.authorize();
    $.socialWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;