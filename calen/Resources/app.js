
// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'#fff'
});

var chartHTML = '<html><head> <title>RaphaelJS Chart</title><meta name="viewport" content="width=device-width, initialscale=1.0"/> </head><body> <div id="chartDiv" style="width:320px; height: 320px; margin: 0"><h1>dfhdksjfhdj</h1></div></body></html>';
//add a webview to contain our chart

var webview = Titanium.UI.createWebView({
width: 320,
height: 367,
top: 0,
html: chartHTML
});
win.add(webview);
win.open();
