var win = Titanium.UI.currentWindow;
win.backgroundColor = '#660000';

var currentSize = Ti.App.Properties.getInt("fontSize");

var picker = Ti.UI.createPicker({left:30,right:30});
var data = [
	{title:'Small  (12pt)',points:'12',fontSize:18},
	{title:'Medium (14pt)',points:'14',fontSize:18},
	{title:'Large  (16pt)',points:'16',fontSize:18},
	{title:'X-Large (18pt)',points:'18',fontSize:18}
];
for (c=0;c<data.length;c++) {
	if (data[c].points == currentSize) {
		data[c].selected = true;
	}
}
picker.add(data);
picker.selectionIndicator = true;
win.add(picker);

var label = Ti.UI.createLabel({
	text:'Text size for description',
	top:50,
	width:'auto',
	height:'auto',
	textAlign:'center',
	color:'#ffffff',
	font:{fontWeight:'bold',fontSize:18}
});
win.add(label);


picker.addEventListener('change',function(e)
{
	Ti.App.Properties.setInt("fontSize",e.row.points);
	currentSize = e.row.points;
});
