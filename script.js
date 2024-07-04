function xhr (type, url, data, options) {
  options = options || {};
  var request = new XMLHttpRequest();
  request.open(type, url, true);
  if(type === "POST"){
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        options.success && option.success(parse(this.responseText));
      } else {
        options.error && options.error(this.status);
      }
    }
  };
  request.send(data);
}

function parse(text){
  try {
     return JSON.parse(text);
  } catch(e){
     return text;
  }
}

//document.domain = "172.27.5.26";
//console.log(window.parent.getAllAngularRootElements());
function displayMessage (evt) {
	const idNode = document.getElementById("selected-id");
	if (idNode) {
		idNode.innerHTML = evt.data;		
	}
	xhr("POST", 'http://172.27.5.26:81/app/oasimka/cards/api/FormInstance/5', [{id: 1, value: [evt.data]}], {success: (response) => {
		const jsonNode = document.getElementById("selected-json");
		if (jsonNode) {
			jsonNode.innerHTML = JSON.stringify(response, null, 2);
			
		}		
	}}	
}

if (window.addEventListener) {
	// For standards-compliant web browsers
	window.addEventListener("message", displayMessage, false);
}
else {
	window.attachEvent("onmessage", displayMessage);
}

//alert("Alive!");
