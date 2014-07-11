function addUser() {
	var users = Alloy.Collections.user;
	var model = Alloy.createModel('user', {
		name: $.name.value || '<no name>'
	});
	users.add(model);
	model.save();
	alert("Agregado");
}
function closeWindow() {
	$.add.close();
}