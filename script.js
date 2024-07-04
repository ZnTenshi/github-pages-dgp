//document.domain = "172.27.5.26";
//console.log(window.parent.getAllAngularRootElements());
function displayMessage (evt) {
	document.getElementById("selected-id")?.innerHTML = evt.data;	
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}

//alert("Alive!");
