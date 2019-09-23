$(document).ready(function() {
	var tmpCopy = "";
	$("#converter").click(function() {
		let string = $("#htmlCode").val();
		let converter = string;
		/* primer lote: Apertura de tags sin atributos HTML */
		let openTagsClose = ["<ol>", "<li>", "<ul>", "<i>", "<p>", "<a>", "<b>", "<button>", "<span>",  "<small>", "<tr>", "<th>", "<td>", "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<code>", "<pre>", "<iframe>", "<link>", "<script>", "<figure>", "<html>", "<body>", "<head>", "<nav>", "<header>", "<main>", "<div>", "<footer>", "<sidebar>", "<section>", "<article>", "<form>", "<font>", "<table>", "<source>", "<canva>", "<style>", "<thead>", "<tbody>", , "<strong>", "<label>", "<input>", "<select>", "<option>", "<textarea>", "<blockquote>", "<cite>", "<img>"];
		let tagsReplaceClose = [ "ol ", "li ", "ul ", "i ", "p ", "b ", "a ", "button ",  "span ",  "small ", "tr ", "th ", "td ", "h1 ", "h2 ", "h3 ", "h4 ", "h5 ", "h6 ", "body ", "code ", "pre ", "iframe ", "input ",  "link ", "script ", "figure ", "html ", "head ", "nav ", "header ", "main ", "div ", "footer ", "sidebar ", "section ", "article ", "form ", "font ", "table ", "source ", "canva ", "style ", "thead ", "tbody ",  "strong ", "label ",  "select ", "option ", "textarea ", "blockquote ", "cite ", "img "];

		/* segundo lote: Eliminacion de cierre de etiqueras*/
		let closeTags = ["</ol>", "</li>", "</ul>", "</b>", "</a>", "</p>", "</i>","/>", "</button>", "</span>",  "</small>", "</tr>", "</th>", "</td>", "</h1>", "</h2>", "</h3>", "</h4>", "</h5>", "</h6>",  "</code>", "</pre>", "</iframe>", "</link>", "</script>", "</figure>", "</html>", "</body>", "</head>", "</nav>", "</header>", "</main>", "</div>", "</footer>", "</sidebar>", "</section>", "</article>", "</form>", "</font>", "</table>", "</source>", "</canva>", "</style>", "</thead>", "</tbody>",  "</strong>", "</label>", "</input>", "</select>", "</option>", "</textarea>",  "</blockquote>", "</img>", "</cite>"];
		let openTags = ["<ol", "<li", "<ul", "<i", "<p", "<a", "<b", "<button", "<span",  "<small", "<tr", "<th", "<td", "<h1", "<h2", "<h3", "<h4", "<h5", "<h6", "<code", "<pre", "<iframe", "<link", "<script", "<figure", "<html", "<body", "<head", "<nav", "<header", "<main", "<div", "<footer", "<sidebar", "<section", "<article", "<form", "<font", "<table", "<source", "<canva", "<style", "<thead", "<tbody", , "<strong", "<label", "<input", "<select", "<option", "<textarea", "<blockquote", "<cite", "<img"];

		/* ultimo lote: Apertura de tags con atributos HTML */
		let tagsReplace = [ "ol(", "li(", "ul(", "i(", "p(", "b(", "a(", "button(",  "span(",  "small(", "tr(", "th(", "td(", "h1(", "h2(", "h3(", "h4(", "h5(", "h6(", "body(", "code(", "pre(", "iframe(", "input(",  "link(", "script(", "figure(", "html(", "head(", "nav(", "header(", "main(", "div(", "footer(", "sidebar(", "section(", "article(", "form(", "font(", "table(", "source(", "canva(", "style(", "thead(", "tbody(",  "strong(", "label(",  "select(", "option(", "textarea(", "blockquote(", "cite(", "img("];
		let tagsReplaceCss = [
		"<span class='jade-tags'>ol</span>(",
		"<span class='jade-tags'>li</span>(",
		"<span class='jade-tags'>ul</span>(",
		"<span class='jade-tags'>i</span>(",
		"<span class='jade-tags'>p</span>(",
		"<span class='jade-tags'>b</span>(",
		"<span class='jade-tags'>a</span>(",
		"<span class='jade-tags'>button</span>(",
		"<span class='jade-tags'>span</span>(",
		"<span class='jade-tags'>small</span>(",
		"<span class='jade-tags'>tr</span>(",
		"<span class='jade-tags'>th</span>(",
		"<span class='jade-tags'>td</span>(",
		"<span class='jade-tags'>h1</span>(",
		"<span class='jade-tags'>h2</span>(",
		"<span class='jade-tags'>h3</span>(",
		"<span class='jade-tags'>h4</span>(",
		"<span class='jade-tags'>h5</span>(",
		"<span class='jade-tags'>h6</span>(",
		"<span class='jade-tags'>body</span>(",
		"<span class='jade-tags'>code</span>(",
		"<span class='jade-tags'>pre</span>(",
		"<span class='jade-tags'>iframe</span>(",
		"<span class='jade-tags'>input</span>(",
		"<span class='jade-tags'>link</span>(",
		"<span class='jade-tags'>script</span>(",
		"<span class='jade-tags'>figure</span>(",
		"<span class='jade-tags'>html</span>(",
		"<span class='jade-tags'>head</span>(",
		"<span class='jade-tags'>nav</span>(",
		"<span class='jade-tags'>header</span>(",
		"<span class='jade-tags'>main</span>(",
		"<span class='jade-tags'>div</span>(",
		"<span class='jade-tags'>footer</span>(",
		"<span class='jade-tags'>sidebar</span>(",
		"<span class='jade-tags'>section</span>(",
		"<span class='jade-tags'>article</span>(",
		"<span class='jade-tags'>form</span>(",
		"<span class='jade-tags'>font</span>(",
		"<span class='jade-tags'>table</span>(",
		"<span class='jade-tags'>source</span>(",
		"<span class='jade-tags'>canva</span>(",
		"<span class='jade-tags'>style</span>(",
		"<span class='jade-tags'>thead</span>(",
		"<span class='jade-tags'>tbody</span>(",
		"<span class='jade-tags'>strong</span>(",
		"<span class='jade-tags'>label</span>(",
		"<span class='jade-tags'>select</span>(",
		"<span class='jade-tags'>option</span>(",
		"<span class='jade-tags'>textarea</span>(",
		"<span class='jade-tags'>blockquote</span>(",
		"<span class='jade-tags'>cite</span>(",
		"<span class='jade-tags'>img</span>("];
		// suprimir html completo /<[^>]*>?/g

		function splitFor(string, search, replace = "", option = false){
			let array = new Array();
			let result = "";
			let classes = [];
			let sub = "";
			array = string.split(search);
			for (let i = 0; i < array.length; i++) {
				if (i == (array.length -1)) {
					result += `${array[i]}`;
					// classes.push(`${array[i]}`);
					// if (option == true) { console.log("normal" + array[i]);}
				}else{
					result += `${array[i]}${replace}`;
					classes.push(`${array[i]}${replace}`);

					// if (option == true) { console.log("reeplace" + replace);}
					// if(option == true){
						// console.log(classes);
					// }
				}
			}
			return result;
		}
		function replaceArray(string, arraySearch, arrayReplace){
			let array = new Array();
			let result = "";
			let classes = [];
			array = string.split(search);
			for (let i = 0; i < array.length; i++) {
				if (i == (array.length -1)) {
					result += `${array[i]}`;
				}else{
					result += `${array[i]}${replace}`;
				}
			}
			return result;
		}
		function bucleFor (string, arrayTags, arrayReplace = "", tagsSinAttr = false) {
			let result = string;
			let tmp = [];
			let option = false;
			for (let j = arrayTags.length -1; j >= 0; j--) {
				if ( string.includes(arrayTags[j] )) {
					tmp.push(arrayTags[j]);
					// console.log(arrayTags[j]);
				}
			}
			for(let k = 0; k < tmp.length; k++){
				let position = -1;

				if(tagsSinAttr == "tags"){
					position = arrayReplace.indexOf("<span class='jade-tags'>" + tmp[k].replace("(", "</span>") + "(");
					result = splitFor(result, tmp[k], arrayReplace[position], true);
					option = true;
				}else{
					if (tagsSinAttr == false) {
						position = arrayReplace.indexOf(tmp[k].replace("<", "")+ "(");
					}
					else if(tagsSinAttr == true){
						position = arrayReplace.indexOf(tmp[k].replace("<", "").replace(">", " "));
					}
					result = splitFor(result, tmp[k], arrayReplace[position]);
				}

			}
			if(option == true){
				let resultTmp = result;
				let arrayTmp = resultTmp.split("</span>(");
				let contruct = [];
				let contructReplace = [];
				let contador = 0;

				for (let i = arrayTmp.length - 1; i >= 0; i--) {
					let varTmp = arrayTmp[i].split(")")
					// console.log();
					// console.log(varTmp);
					if(varTmp != ""){
						let closeTmp = "";
						if(varTmp.length != 1){
							closeTmp = varTmp[1].split("<span class='jade-tags'>")[0];
							let replac = "<span class='jade-class'>" + varTmp[0] + "</span>" + closeTmp;
							contruct.push(replac);
							contructReplace.push(varTmp[0]);
							contador++;
							// resultTmp.replace(varTmp[1], replac);
						}else{
							closeTmp = "";
						}
					}
					// console.log("\n\n");
				}
				resultTmp = "";
				// console.log(contructReplace)
				// console.log(contruct)
				resultTmp = splitFor(result, contructReplace, contruct, true);
				console.log(contructReplace);
				console.log(contruct);
				// resultTmp =
				// console.log(contador);
				let spanTmp = "";
				for( let i = 0; i<contador; i++){
					spanTmp = exp(resultTmp, contructReplace[i]);
				}
					// console.log(spanTmp);
				return resultTmp;
			}
			return result;
		}
		function exp(html, attr){
			let ree = new RegExp("(.*)(" + attr + ")(.*)", ["g"]);
			let reg = html.replace(ree, "$1<span class='jade-class'>$2</span>$3");
			return reg;
		}

		// Eliminacion las tags sin atributos HTML
		converter = bucleFor (converter, openTagsClose, tagsReplaceClose, true);
		// Eliminacion los cierre de tags
		converter = bucleFor (converter, closeTags);
		// Eliminacion las tags con atributos HTML
		converter = bucleFor (converter, openTags, tagsReplace);
		// Eliminacion de falltas
		converter = splitFor(converter, '">', '" ) ');
		converter = splitFor(converter, "'>", "') ");
		// converter = splitFor(converter, "'(>", "' ");
		// console.log(converter);

		let code = $(".code .section");
		// code.text(converter);
		tmpCopy = converter; // paso la conversion a una variable global del scope


		let conclucion = bucleFor(converter, tagsReplace, tagsReplaceCss, "tags");
		// console.log(conclucion)
		// let conclucion = bucleFor(converter, tagsReplace, tagsReplaceCss, "class");
		code.html(conclucion);
		// console.log("conclucion: "+ conclucion);
		// console.log($(".code .section:contains(div)"));
	});

	function ennumerar() {
		let n = $(".html div");
		let data = "";
		for (let i = 1; i <= n.length; i++) {
			data += `<li class="num">${i}</li>`;
		}
		$(".container-num").html(data);
	};

});

document.addEventListener('DOMContentLoaded', (event)=> {
	document.querySelectorAll('pre code').forEach((block) => {
		hljs.highlightBlock(block);
	})
})
