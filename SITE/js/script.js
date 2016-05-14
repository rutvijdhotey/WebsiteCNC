$(function () { // this means that we are making our function effective immediately after we load our HTML before loading all the pics and everything.
				//Same as document.addEventListener("DOMConetentLoaded")
	//Same as document.querySelector("#navbarToggle")
	$("#navbarToggle").blur(function(event) {
		var screenWidth = window.innerWidth;
		if (screenWidth< 768) {
			$("#collabsable-nav").collapse('hide');
		}
	});
});			
	
