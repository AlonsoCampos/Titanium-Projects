function Controller() {
    function testclick(e) {
        alert("Clicked '" + e.source.id + "'");
    }
    function likeunlike(e) {
        e.source.image = "/likebtn.png" === e.source.image ? "/likebtnOn.png" : "/likebtn.png";
    }
    function showhidemenu() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = "300dp";
            menuOpen = true;
        }
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: moveTo,
            duration: 100
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#2c323f",
        left: 0,
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
    showhidemenu ? $.__views.menu.addEventListener("click", showhidemenu) : __defers["$.__views.menu!click!showhidemenu"] = true;
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#c4cde0",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
    $.__views.iconBar = Ti.UI.createView({
        backgroundImage: "/iconBarBG.png",
        width: Ti.UI.FILL,
        height: "54dp",
        border: 1,
        borderColor: "navy",
        id: "iconBar"
    });
    $.__views.main.add($.__views.iconBar);
    $.__views.topActions = Ti.UI.createView({
        width: "150dp",
        height: "50dp",
        layout: "horizontal",
        id: "topActions"
    });
    $.__views.iconBar.add($.__views.topActions);
    $.__views.friendsBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/friendsbtn.png",
        id: "friendsBtn"
    });
    $.__views.topActions.add($.__views.friendsBtn);
    testclick ? $.__views.friendsBtn.addEventListener("click", testclick) : __defers["$.__views.friendsBtn!click!testclick"] = true;
    $.__views.messagesBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/messagesbtn.png",
        id: "messagesBtn"
    });
    $.__views.topActions.add($.__views.messagesBtn);
    testclick ? $.__views.messagesBtn.addEventListener("click", testclick) : __defers["$.__views.messagesBtn!click!testclick"] = true;
    $.__views.notificationsBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/notificationsbtn.png",
        id: "notificationsBtn"
    });
    $.__views.topActions.add($.__views.notificationsBtn);
    testclick ? $.__views.notificationsBtn.addEventListener("click", testclick) : __defers["$.__views.notificationsBtn!click!testclick"] = true;
    $.__views.menubtn = Ti.UI.createImageView({
        left: 0,
        width: "55dp",
        height: "54dp",
        image: "/menubtn.png",
        id: "menubtn"
    });
    $.__views.iconBar.add($.__views.menubtn);
    showhidemenu ? $.__views.menubtn.addEventListener("click", showhidemenu) : __defers["$.__views.menubtn!click!showhidemenu"] = true;
    $.__views.chatbtn = Ti.UI.createImageView({
        width: "55dp",
        height: "54dp",
        right: 0,
        image: "/chatbtn.png",
        id: "chatbtn"
    });
    $.__views.iconBar.add($.__views.chatbtn);
    testclick ? $.__views.chatbtn.addEventListener("click", testclick) : __defers["$.__views.chatbtn!click!testclick"] = true;
    $.__views.menuBar = Ti.UI.createView({
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "50dp",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId0"
    });
    $.__views.menuBar.add($.__views.__alloyId0);
    $.__views.statusBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/statusbtn.png",
        id: "statusBtn"
    });
    $.__views.__alloyId0.add($.__views.statusBtn);
    testclick ? $.__views.statusBtn.addEventListener("click", testclick) : __defers["$.__views.statusBtn!click!testclick"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId1"
    });
    $.__views.menuBar.add($.__views.__alloyId1);
    $.__views.photoBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/photobtn.png",
        id: "photoBtn"
    });
    $.__views.__alloyId1.add($.__views.photoBtn);
    testclick ? $.__views.photoBtn.addEventListener("click", testclick) : __defers["$.__views.photoBtn!click!testclick"] = true;
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        id: "__alloyId2"
    });
    $.__views.menuBar.add($.__views.__alloyId2);
    $.__views.checkinBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/checkinbtn.png",
        id: "checkinBtn"
    });
    $.__views.__alloyId2.add($.__views.checkinBtn);
    testclick ? $.__views.checkinBtn.addEventListener("click", testclick) : __defers["$.__views.checkinBtn!click!testclick"] = true;
    $.__views.grayLine = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: "1",
        id: "grayLine"
    });
    $.__views.main.add($.__views.grayLine);
    var __alloyId3 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200dp",
        selectionStyle: "NONE",
        className: "listRow",
        id: "listRow"
    });
    __alloyId3.push($.__views.listRow);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 3,
        borderWidth: 1,
        left: "5dp",
        top: "5dp",
        right: "5dp",
        height: "190dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.listRow.add($.__views.rowContainer);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "66dp",
        height: "66dp",
        image: "/profilepic.png",
        top: "5dp",
        left: "5dp",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.profileName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#576b95",
        top: "5dp",
        left: "80dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Ricardo Alcocer",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.timeAgo = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#bbbbbb",
        top: "25dp",
        left: "80dp",
        font: {
            fontSize: "16dp"
        },
        text: "10 minutes ago",
        id: "timeAgo"
    });
    $.__views.rowContainer.add($.__views.timeAgo);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 5,
        right: 5,
        font: {
            fontSize: "16dp"
        },
        text: "This is my status update.",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
    $.__views.grayLine = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: "1",
        id: "grayLine",
        bottom: "51"
    });
    $.__views.rowContainer.add($.__views.grayLine);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId4"
    });
    $.__views.bottomActions.add($.__views.__alloyId4);
    $.__views.likeBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/likebtn.png",
        id: "likeBtn"
    });
    $.__views.__alloyId4.add($.__views.likeBtn);
    likeunlike ? $.__views.likeBtn.addEventListener("click", likeunlike) : __defers["$.__views.likeBtn!click!likeunlike"] = true;
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId5"
    });
    $.__views.bottomActions.add($.__views.__alloyId5);
    $.__views.commentBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/commentbtn.png",
        id: "commentBtn"
    });
    $.__views.__alloyId5.add($.__views.commentBtn);
    testclick ? $.__views.commentBtn.addEventListener("click", testclick) : __defers["$.__views.commentBtn!click!testclick"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200dp",
        selectionStyle: "NONE",
        className: "listRow",
        id: "listRow"
    });
    __alloyId3.push($.__views.listRow);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 3,
        borderWidth: 1,
        left: "5dp",
        top: "5dp",
        right: "5dp",
        height: "190dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.listRow.add($.__views.rowContainer);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "66dp",
        height: "66dp",
        image: "/profilepic.png",
        top: "5dp",
        left: "5dp",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.profileName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#576b95",
        top: "5dp",
        left: "80dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Ricardo Alcocer",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.timeAgo = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#bbbbbb",
        top: "25dp",
        left: "80dp",
        font: {
            fontSize: "16dp"
        },
        text: "10 minutes ago",
        id: "timeAgo"
    });
    $.__views.rowContainer.add($.__views.timeAgo);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 5,
        right: 5,
        font: {
            fontSize: "16dp"
        },
        text: "I'm writing some XML markup to be used on a Mobile App.",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
    $.__views.grayLine = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: "1",
        id: "grayLine",
        bottom: "51"
    });
    $.__views.rowContainer.add($.__views.grayLine);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId6"
    });
    $.__views.bottomActions.add($.__views.__alloyId6);
    $.__views.likeBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/likebtn.png",
        id: "likeBtn"
    });
    $.__views.__alloyId6.add($.__views.likeBtn);
    likeunlike ? $.__views.likeBtn.addEventListener("click", likeunlike) : __defers["$.__views.likeBtn!click!likeunlike"] = true;
    $.__views.__alloyId7 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId7"
    });
    $.__views.bottomActions.add($.__views.__alloyId7);
    $.__views.commentBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/commentbtn.png",
        id: "commentBtn"
    });
    $.__views.__alloyId7.add($.__views.commentBtn);
    testclick ? $.__views.commentBtn.addEventListener("click", testclick) : __defers["$.__views.commentBtn!click!testclick"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200dp",
        selectionStyle: "NONE",
        className: "listRow",
        id: "listRow"
    });
    __alloyId3.push($.__views.listRow);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 3,
        borderWidth: 1,
        left: "5dp",
        top: "5dp",
        right: "5dp",
        height: "190dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.listRow.add($.__views.rowContainer);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "66dp",
        height: "66dp",
        image: "/profilepic.png",
        top: "5dp",
        left: "5dp",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.profileName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#576b95",
        top: "5dp",
        left: "80dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Ricardo Alcocer",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.timeAgo = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#bbbbbb",
        top: "25dp",
        left: "80dp",
        font: {
            fontSize: "16dp"
        },
        text: "10 minutes ago",
        id: "timeAgo"
    });
    $.__views.rowContainer.add($.__views.timeAgo);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: 5,
        right: 5,
        font: {
            fontSize: "16dp"
        },
        text: "I'm writing some XML markup to be used on a Mobile App.",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
    $.__views.grayLine = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: "1",
        id: "grayLine",
        bottom: "51"
    });
    $.__views.rowContainer.add($.__views.grayLine);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId8"
    });
    $.__views.bottomActions.add($.__views.__alloyId8);
    $.__views.likeBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/likebtn.png",
        id: "likeBtn"
    });
    $.__views.__alloyId8.add($.__views.likeBtn);
    likeunlike ? $.__views.likeBtn.addEventListener("click", likeunlike) : __defers["$.__views.likeBtn!click!likeunlike"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId9"
    });
    $.__views.bottomActions.add($.__views.__alloyId9);
    $.__views.commentBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/commentbtn.png",
        id: "commentBtn"
    });
    $.__views.__alloyId9.add($.__views.commentBtn);
    testclick ? $.__views.commentBtn.addEventListener("click", testclick) : __defers["$.__views.commentBtn!click!testclick"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#c4cde0",
        separatorStyle: "NONE",
        data: __alloyId3,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuOpen = false;
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
    });
    $.index.open();
    __defers["$.__views.menu!click!showhidemenu"] && $.__views.menu.addEventListener("click", showhidemenu);
    __defers["$.__views.friendsBtn!click!testclick"] && $.__views.friendsBtn.addEventListener("click", testclick);
    __defers["$.__views.messagesBtn!click!testclick"] && $.__views.messagesBtn.addEventListener("click", testclick);
    __defers["$.__views.notificationsBtn!click!testclick"] && $.__views.notificationsBtn.addEventListener("click", testclick);
    __defers["$.__views.menubtn!click!showhidemenu"] && $.__views.menubtn.addEventListener("click", showhidemenu);
    __defers["$.__views.chatbtn!click!testclick"] && $.__views.chatbtn.addEventListener("click", testclick);
    __defers["$.__views.statusBtn!click!testclick"] && $.__views.statusBtn.addEventListener("click", testclick);
    __defers["$.__views.photoBtn!click!testclick"] && $.__views.photoBtn.addEventListener("click", testclick);
    __defers["$.__views.checkinBtn!click!testclick"] && $.__views.checkinBtn.addEventListener("click", testclick);
    __defers["$.__views.likeBtn!click!likeunlike"] && $.__views.likeBtn.addEventListener("click", likeunlike);
    __defers["$.__views.commentBtn!click!testclick"] && $.__views.commentBtn.addEventListener("click", testclick);
    __defers["$.__views.likeBtn!click!likeunlike"] && $.__views.likeBtn.addEventListener("click", likeunlike);
    __defers["$.__views.commentBtn!click!testclick"] && $.__views.commentBtn.addEventListener("click", testclick);
    __defers["$.__views.likeBtn!click!likeunlike"] && $.__views.likeBtn.addEventListener("click", likeunlike);
    __defers["$.__views.commentBtn!click!testclick"] && $.__views.commentBtn.addEventListener("click", testclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;