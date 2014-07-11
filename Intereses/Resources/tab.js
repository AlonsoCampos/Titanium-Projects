var win1 = Titanium.UI.createWindow({  
    title:'Evento',
    backgroundColor:'#c5ccd4'
});
var textField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 10, left: 10,
  width: 250, height: 60
});


basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});
win1.add(basicSwitch);
win1.add(textField);
var button = Ti.UI.createButton({
    //title: '?',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 15,
    //backgroundColor: '#aaa',
    backgroundImage: 'off.png',
    backgroundSelectedImage:'on.png',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false //value is a custom property in this casehere.
});
 
//Attach some simple on/off actions
button.on = function() {
    this.backgroundColor = '#159902';
    this.value = true;
    this.backgroundImage ="on.png";
};
 
button.off = function() {
    this.backgroundColor = '#aaa';
    this.value = false;
    this.backgroundImage ="off.png";
};
 
button.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
win1.add(button);
win1.open();