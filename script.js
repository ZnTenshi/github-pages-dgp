//document.domain = "172.27.5.26";
//console.log(window.parent.getAllAngularRootElements());
function displayMessage (evt) {
	var message;
	message = "I got " + evt.data + " from " + evt.origin;
	alert(message);
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}

alert("Alive!");
