exports.MainWindow = function (g_Vars)
{
// Creation - GUI DO NOT TOUCH
// [an:Startup][true][ta:Startup][true][ph:Startup][true][pa:Startup][true][mw:Startup][true][an:name][MainWindow][ta:name][MainWindow][ph:name][MainWindow][pa:name][MainWindow][mw:name][MainWindow][an:title][MainWindow][ta:title][MainWindow][ph:title][MainWindow][pa:title][MainWindow][mw:title][MainWindow]
var win;
win = Titanium.UI.createWindow({
Startup : true,
name : 'MainWindow',
title : 'MainWindow',
});

win.aoChildWindows = {};
win.pParentWin = g_Vars.currentWindow;
if (g_Vars.currentWindow != undefined) g_Vars.currentWindow.pChildWindow = win;
// Creation - END

// MainWindow_close - BEGIN
win.addEventListener ('close', function (e) {
	Ti.API.fireEvent ('GUI_Window_Closed', { win : win});
});
// MainWindow_close - END




// Startup - GUI DO NOT TOUCH
g_Vars.aoChildWindows['MainWindow'] = win;
g_Vars.MainWindow = win;
win.open();
g_Vars.currentWindow = win;
// Startup - END

return win;
};
