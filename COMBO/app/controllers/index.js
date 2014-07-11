function doClick(e) {
    alert($.label.text);
}

//$.index.open();

var win = Ti.UI.createWindow({
      //orientationModes : [Ti.UI.PORTRAIT],
});

 var dateLabel = Ti.UI.createLabel({
    color:'#FF9000',
    height:Ti.UI.SIZE,
    width:Ti.UI.SIZE,
    text:'Click  here for Date',
    textAlign:'center',
    font:{fontSize:(Titanium.Platform.displayCaps.platformHeight * 4)/100,  fontWeight:'bold'},
});
 
win.add(dateLabel);
dateLabel.addEventListener("click",function(e){
      labelClicked();
});
var pickerIndex = 0;

var picker_view = Titanium.UI.createView({
    bottom : -251,
    height : 251,
    width : 320,
    zIndex : 9999,
    backgroundColor : '#0c7598',
});
win.add(picker_view);

var cancel = Titanium.UI.createButton({
    title : 'Close',
    style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
var done = Titanium.UI.createButton({
    title : 'Select',
    style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
var spacer = Titanium.UI.createButton({
    systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var toolbar = Titanium.UI.createToolbar({
    top : 0,
    barColor : '#0c7598',
    items : [cancel, spacer, spacer, spacer, spacer, done]
});
var slide_in = Titanium.UI.createAnimation({
    bottom : 0
});
var slide_out = Titanium.UI.createAnimation({
    bottom : -251
});

function labelClicked(){
    
 var   picker = Titanium.UI.createPicker({
        top : 43,
        value : new Date(),
        type : Ti.UI.PICKER_TYPE_DATE,
        minDate : new Date(2000,11,31),
        maxDate : new Date(2016,11,31),
        selectionIndicator : true
    });
    picker_view.add(toolbar);
    picker_view.add(picker);
    picker_view.animate(slide_in);

    picker.addEventListener('change', function(e){
         var month =  e.value.getMonth()+1;
         var year = e.value.getFullYear();
         var day = e.value.getDate();
             month = month.toString();
         if (month.length < 2) {
                month = '0' + month;
           }
           day = day.toString();
           if (day.length < 2) {
                day = '0' + day;
           }
         dateLabel.text = month + '/' + day +'/'+ year;
    });
}

cancel.addEventListener('click', function(e) {
             dateLabel.text = "";
            picker_view.animate(slide_out);
 });
    
done.addEventListener('click', function(e){
        picker_view.animate(slide_out);
});

win.open();