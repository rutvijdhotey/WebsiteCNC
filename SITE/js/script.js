
	
$(function () { // this means that we are making our function effective immediately after we load our HTML before loading all the pics and everything.
				//Same as document.addEventListener("DOMConetentLoaded")
	//Same as document.querySelector("#navbarToggle")
	$("#navbarToggle").blur ( function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});			



(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var target = document.querySelector(selector);
  target.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  console.log('Reached showLoading');
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
  
   console.log('Reached after showloading');
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml, 
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  }, 
  false);
});

console.log('Reached end');
global.$dc = dc;

})(window);


