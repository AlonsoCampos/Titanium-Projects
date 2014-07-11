exports.Globals =  
{
	// Creation - GUI DO NOT TOUCH
m_fIsAndroid : (Ti.Platform.name == 'android'),
m_fIsTablet : (Ti.Platform.name == 'android') && (Math.sqrt( (Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.dpi)*( Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.dpi)+(Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.dpi)*(Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.dpi)) >= 8),
m_fIsiPhone : (Ti.Platform.name == 'iphone') || (Ti.Platform.name == 'iPhone OS'),
m_fIsiPad : (Ti.Platform.name == 'ipad'),
m_fIsMobileWeb : (Ti.Platform.name == 'mobileweb'),
aoChildWindows : {},
	// Creation - END
};
