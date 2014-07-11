function Controller() {
    function closeMe() {
        $.detail.close();
    }
    function updateBook() {
        dialogs.confirm({
            message: "Are you sure you want to make changes?",
            callback: function() {
                model.save({
                    title: $.title.value,
                    author: $.author.value
                });
            }
        });
    }
    function deleteBook() {
        dialogs.confirm({
            message: "Are you sure you want to delete this book?",
            callback: function() {
                model.destroy({
                    wait: true,
                    success: function() {
                        $.detail.close();
                    },
                    error: function(mod, response) {
                        alert(response);
                    }
                });
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        modal: true,
        backgroundColor: "white",
        layout: "vertical",
        title: "Book Details",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    closeMe ? $.__views.detail.addEventListener("androidbackbutton", closeMe) : __defers["$.__views.detail!androidbackbutton!closeMe"] = true;
    $.__views.__alloyId6 = Ti.UI.createButton({
        top: "10dp",
        title: "Close",
        id: "__alloyId6"
    });
    closeMe ? $.__views.__alloyId6.addEventListener("click", closeMe) : __defers["$.__views.__alloyId6!click!closeMe"] = true;
    $.__views.detail.rightNavButton = $.__views.__alloyId6;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Title:",
        id: "__alloyId7"
    });
    $.__views.detail.add($.__views.__alloyId7);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "title"
    });
    $.__views.detail.add($.__views.title);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontSize: "14dp"
        },
        text: "Author:",
        id: "__alloyId8"
    });
    $.__views.detail.add($.__views.__alloyId8);
    $.__views.author = Ti.UI.createTextField({
        borderColor: "gray",
        top: "10dp",
        id: "author"
    });
    $.__views.detail.add($.__views.author);
    $.__views.__alloyId9 = Ti.UI.createButton({
        top: "10dp",
        title: "Save Edits",
        id: "__alloyId9"
    });
    $.__views.detail.add($.__views.__alloyId9);
    updateBook ? $.__views.__alloyId9.addEventListener("click", updateBook) : __defers["$.__views.__alloyId9!click!updateBook"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        top: "10dp",
        title: "Remove",
        id: "__alloyId10"
    });
    $.__views.detail.add($.__views.__alloyId10);
    deleteBook ? $.__views.__alloyId10.addEventListener("click", deleteBook) : __defers["$.__views.__alloyId10!click!deleteBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var book = args.toJSON();
    var model = args;
    $.author.value = book.author || "No author";
    $.title.value = book.title || "No title";
    var dialogs = require("alloy/dialogs");
    __defers["$.__views.detail!androidbackbutton!closeMe"] && $.__views.detail.addEventListener("androidbackbutton", closeMe);
    __defers["$.__views.__alloyId6!click!closeMe"] && $.__views.__alloyId6.addEventListener("click", closeMe);
    __defers["$.__views.__alloyId9!click!updateBook"] && $.__views.__alloyId9.addEventListener("click", updateBook);
    __defers["$.__views.__alloyId10!click!deleteBook"] && $.__views.__alloyId10.addEventListener("click", deleteBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;