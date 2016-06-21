// ==UserScript==
// @author      me
// @name        YouTube Auto Speed
// @namespace   m
// @include     *.youtube.com/watch*
// @version     1.0
// @grant       unsafeWindow
// @grant       console.log
// @noframes
// ==/UserScript==

var speed = 2.0;

var count = 0;
var id = setInterval(function() {
	if ( unsafeWindow.document.getElementsByClassName("video-stream html5-main-video").length > 0 ) {
	  unsafeWindow.document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = speed;
		clearInterval(id); 
		return;
	}
	
	count++;
	if (count > 50) { clearInterval(id); return; }
}, 300);
