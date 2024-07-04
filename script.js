//document.domain = "172.27.5.26";
//console.log(window.parent.getAllAngularRootElements());
function displayMessage (evt) {
	const target = document.getElementById("selected-id");
	if (target) {
		target.innerHTML = evt.data;	
	}
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}

//alert("Alive!");
