/**
 * 
 * https://github.com/aaronksaunders/test_social/tree/master/Resources
 * This is a really simple social app that demonstrates how to post to Twitter using Appcelerator Titanium.
 * REQUIRED: DOWNLOAD the "social.js" file from http://appc.me/social.js
 *           and SAVE IT in your app's Resources directory.
 *
 * Get API access to Twitter here: https://dev.twitter.com/apps
 * The consumer key and secret will be used later in this app. Make sure you check "Read & Write"!
 *
 * The latest version of this file can always be found at http://appc.me/social.sample.js
 *
 * Tweet me @dawsontoth with questions, or on the Help Desk if you're an Appcelerator customer!
 */

/**
 * We'll start by making a window with a button...
 */
var win = Ti.UI.createWindow({
	backgroundColor : '#fff'
});
var shareButton = Ti.UI.createButton({
	width : '200dp',
	bottom : '10dp',
	height : '43dp',
	title : 'Tweet "Hello, World!"'
});
win.add(shareButton);
win.open();
ShareTwitter(shareButton);

//Create a Twitter client for this module

/**
 * And when the user clicks on the button, share a message with the world!
 * Note that this will show the authorization UI, if necessary.
 */


/**
 * Finally, here are some other methods you might want to use:
 */

 
 

function ShareTwitter (shareButton) {
	var social = require('twitter/social_plus');

	var twitter = social.create({
		consumerSecret : "lX06QtzF6PomEv4aAeJO7ZuqmulWU4kD392BJK6oUBymg80ksY",
		consumerKey : "9v54NMGBXJoYMSs6Mf62Mhb3g"
	});
	
	shareButton.addEventListener('click', function() {
		twitter.shareImage({
			message : "jajajajaj ",
			image : (Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "wanagow.png")).read(),
			success : function() {
				alert('Tweeted!');
			},
			error : function() {
				alert('ERROR Tweeted!');
			}
		});

	});
	twitter.isAuthorized();
	twitter.authorize(function() {
		alert('Authorized!');
	});
	twitter.deauthorize();
}


