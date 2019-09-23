document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
// var e = "";
// window.addEventListener("keydown", function (event) {
// 	console.log("key: " + event.key);
// 	console.log("keycode: " + event.keyCode);
// 	console.log("which: " + event.which);
// 	console.log("code: " + event.code);
// 	console.log("charCode: " + event.charCode);
// 	// if ( event.keyCode == 9 ) {
// 	// 	event.preventDefault();
// 	// }
// 	e = event;
// })

// let recomendation =
// `<div class="recomendation">
// 	<ul>
		// <li>
		// 	<a href="#">console.error("Hola mundo");</a>
		// 	<a href="#">propiedad</a>
		// </li>
		// <li>
		// 	<a href="#">console.error("Hola mundo");</a>
		// 	<a href="#">propiedad</a>
		// </li>
		// <li>
		// 	<a href="#">console.error("Hola mundo");</a>
		// 	<a href="#">propiedad</a>
		// </li>
// 		<li>
// 			<a href="#">console.error("Hola mundo");</a>
// 			<a href="#">propiedad</a>
// 		</li>
// 		<li class="active">
// 			<a href="#">console.log("Hola mundo");</a>
// 			<a href="#">propiedad</a>
// 		</li>
// 	</ul>
// </div>`;
let syntaxis = {
	css: {
		property: []
	},
	js: [
		"document",
		"window",
		"console",
		'console.log("Hola mundo")',
		'console.error("Error")',
		'getElementById()',
		'getElementsByTagName("")',
		'getElementsByTagNameNS()',
		'getElementsByName("")',
		'getElementsByClassName("")',
		'setInterval()',
		'setTimeout("")',
		'addEventListener()',
		'alert("")'
	]
};
// let recomendation =
// `<div class="recomendation">
// 	<ul>
// 		<li class="active">
// 			<a href="#">${string}</a>
// 			<a href="#">${propiedad}</a>
// 		</li>
// 	</ul>
// </div>`;

$(document).ready(function() {
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});
	function getSelected (editor) {
		var u = editor.val();
		var start = editor.get(0).selectionStart;
		var end = editor.get(0).selectionEnd;
		return [u.substring(0, start), u.substring(end), u.substring(start, end)];
	}
	function getFirstElementMenuContent (lang) {
		let $recomendation = $(".recomendation[data-lang='"+lang+"'] ul li:first-child");
		// let $padre = $(".recomendation[data-lang='"+lang+"']");
		$recomendation.addClass("active");
	}
	function mouseInMenuContent () {
		let $recomendation = $(".recomendation ul li");
		// let $padre = $(".recomendation[data-lang='"+lang+"']");
		$recomendation.addClass("active");
	}
	getFirstElementMenuContent ("js");
	// $(".recomendation ul li").mousemove (function() {
	// 	if( $(this).attr("class") != 'active' ){
	// 		$(this).addClass('active');
	// 	}
	// });
	$(".recomendation ul li").mouseover (function() {
		if( $(this).attr("class") != 'active' ){
			$(".recomendation ul li").removeClass('active');
			$(this).addClass('active');
		}
	});
	$("textarea.edit-code").keyup(function() {
		let lang = "";
		switch ($(this).attr('class')) {
			case "code-js edit-code":
				lang = "js";
				break;
			case "code-css edit-code":
				lang = "css";
				break;
			case "code-html edit-code":
				lang = "html";
				break;
		}
		let text = $(this).val();
		let evaluar = text.split(".").pop() || text.split(" ").pop();
		let $recomendation = $(".recomendation[data-lang='"+lang+"'] ul");
		let $padre = $(".recomendation[data-lang='"+lang+"']");
		$padre.addClass('hidden');
		$recomendation.html('');
		for( let i = 0; i < syntaxis.js.length; i++){
			if ( syntaxis.js[i].includes(evaluar) ) {
				console.log(syntaxis.js[i]);
				$padre.removeClass('hidden');
				$recomendation.append('<li><a href="#">'+syntaxis.js[i]+'</a><a href="#">propiedad</a></li>');
				// console.log($recomendation);
			}
		}
	});
	$("textarea.edit-code").keydown(function(event) {
		if (event.keyCode == 9) {
			event.preventDefault();
			$(this).val( $(this).val() + "  " );
		}
	});
	// variable para guardar el codigo en la memoria
	let save = {
		js: "",
		css: "",
		html: ""
	};
	function exe () {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}
	$("textarea.edit-code").keyup(function() {
		let $this = $(this);
		let saving = "";
		let code = "";
		switch ( $this.attr("class") ) {
			case "code-js edit-code":
				saving = save.js;
				code = $(".lang-js");
				break;
			case "code-css edit-code":
				saving = save.css;
				code = $(".lang-css");
				break;
			case "code-html edit-code":
				saving = save.html;
				code = $(".lang-html");
				break;
		}
		saving = $(this).val();
		code.text(saving);
		exe();
	});
});