/*
	prueba para colorear codigo en textarea
*/

// function colorear () {
// 	var status = document.getElementById("replace").value;
// 	// var status = "Esto es un text @reemplazable @hola mundo";
// 	// status = status.replace(/@(.*)/g, '<span class="command">@$1</span>');
// 	status = status.replace(/@([^ ]+)/g, '<mark class="command">@$1</mark>');
// 	document.getElementById("replace").value = status;
// 	console.log(status);
// }

// // // document.getElementById("replace").addEventListener("keyup", function () {
// // // 	colorear();
// // // }, false);
// document.getElementById("click").addEventListener("click", function  () {
// 	colorear()
// }, false);



// $(document).ready(function() {
// 	var $container = $(".container");
// 	var $backdrop = $(".backdrop");
// 	var $highlights = $(".highlights");
// 	var $textarea = $(".textarea#replace");
// 	var $toggle = $("#click");

// 	var ua = window.navigator.userAgent.toLowerCase();
// 	var isIE = !!ua.match(/msie|trident\/7|edge/);
// 	var isWinPhone = ua.indexOf('windows phone') !== -1
// 	var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

// 	function applyHightlights (text) {
// 		text = text
// 			.replace(/\n$/g, '\n\n')
// 			.replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
// 		if(isIE){
// 			text = text.replace(/ /g, '<wbr>');
// 		}
// 		return text;
// 	}
// 	function handleInput() {
// 		var text = $textarea.val();
// 		var highlightedText = applyHightlights(text);
// 		$highlights.html(highlightedText);
// 	}
// 	function handleScroll () {
// 		var scrollTop = $textarea.scrollTop();
// 		$backdrop.scrollTop(scrollTop);
// 		var scrollLeft = $textarea.scrollLeft();
// 		$backdrop.scrollLeft(scrollLeft);
// 	}
// 	function fixIOS () {
// 		$highlights.css({
// 			'padding-left': '+=3px',
// 			'padding-right': '+=3px'
// 		})
// 	}
// 	function bindEvents () {
// 		$textarea.on({
// 			'input': handleInput,
// 			'scroll': handleScroll
// 		});
// 		$toggle.on('click', function () {
// 			$container.toggleClass('perspective');
// 		});
// 	}
// 	if(isIOS){
// 		fixIOS();
// 	}
// 	bindEvents();
// 	handleInput();
// });


$(document).ready(function() {
	$('#code').highlightWithinTextarea({
	    highlight: "Hola mundo" // string, regexp, array, function, or custom object
	});
});