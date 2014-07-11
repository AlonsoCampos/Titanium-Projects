var currentWin = Ti.UI.currentWindow;

var sendit = Ti.Network.createHTTPClient();
sendit.open('GET', 'http://alonsocampos.net46.net/read.php');
sendit.send();
sendit.onload = function(){
    var json = JSON.parse(this.responseText);

    var json = json.nombre;
	
	var dataArray = [];
	
    var pos;
    for( pos=0; pos < json.length; pos++){
		
		dataArray.push({title:'' + json[pos].nombre + ''});
		// set the array to the tableView
		tableview.setData(dataArray);
    };

};

var tableview = Ti.UI.createTableView({
});

currentWin.add(tableview);
