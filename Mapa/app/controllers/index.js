function doClick(e) {
    alert($.label.text);
}
function changeWithArgs() {
	dialogs.confirm({
		title: 'Confirm (args)',
		message: 'Esta segurp?',
		buttonNames: ['Si', 'No'],
		callback: shouldUseExportsAgainByDefault
	});
}
$.index.open();
