var data = []; 
var drama = Alloy.Models.book;
drama.set('title', 'Hamlet'); 
drama.set('author', 'William Shakespeare'); 
var title = drama.get('title'); 
var row = Ti.UI.createTableViewRow({"title":title}); 
data.push(row); 
$.table.setData(data); 
function addModel () {
	var info =[];
	var libro = Alloy.Models.book;
	data.set("title",$.title.value);
	data.set("author", $.autor.value);
	var t = drama.get("title");
	var fila = Ti.UI.createTableViewRow({"title":t});
	data.push(fila);
	$.table.setData(data);
}
$.index.open();