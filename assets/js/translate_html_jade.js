// let openTagsClose = ["<ol>", "<li>", "<ul>", "<i>", "<p>", "<a>", "<b>", "<button>", "<span>",  "<small>", "<tr>", "<th>", "<td>", "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<code>", "<pre>", "<iframe>", "<link>", "<script>", "<figure>", "<html>", "<body>", "<head>", "<nav>", "<header>", "<main>", "<div>", "<footer>", "<sidebar>", "<section>", "<article>", "<form>", "<font>", "<table>", "<source>", "<canva>", "<style>", "<thead>", "<tbody>", , "<strong>", "<label>", "<input>", "<select>", "<option>", "<textarea>", "<blockquote>", "<cite>", "<img>"];
// let closeTags = ["</ol>", "</li>", "</ul>", "</b>", "</a>", "</p>", "</i>","/>", "</button>", "</span>",  "</small>", "</tr>", "</th>", "</td>", "</h1>", "</h2>", "</h3>", "</h4>", "</h5>", "</h6>",  "</code>", "</pre>", "</iframe>", "</link>", "</script>", "</figure>", "</html>", "</body>", "</head>", "</nav>", "</header>", "</main>", "</div>", "</footer>", "</sidebar>", "</section>", "</article>", "</form>", "</font>", "</table>", "</source>", "</canva>", "</style>", "</thead>", "</tbody>",  "</strong>", "</label>", "</input>", "</select>", "</option>", "</textarea>",  "</blockquote>", "</img>", "</cite>"];
// let tags = ["ol","li","ul","i","p","b","a","button","span","small","tr","th","td","h1","h2","h3","h4","h5","h6","body","code","pre","iframe","input","link","script","figure","html","head","nav","header","main","div","footer","sidebar","section","article","form","font","table","source","canva","style","thead","tbody","strong","label","select","option","textarea","blockquote","cite","img"];
// let openTags = ["<ol", "<li", "<ul", "<i", "<b", "<p", "<a", "<button", "<span",  "<small", "<tr", "<th", "<td", "<h1", "<h2", "<h3", "<h4", "<h5", "<h6", "<code", "<pre", "<iframe", "<link", "<script", "<figure", "<html", "<body", "<head", "<nav", "<header", "<main", "<div", "<footer", "<sidebar", "<section", "<article", "<form", "<font", "<table", "<source", "<canva", "<style", "<thead", "<tbody", , "<strong", "<label", "<input", "<select", "<option", "<textarea", "<blockquote", "<cite", "<img"];
// function cicloItemTags (string, tags) {
// 	let tmp = "";
// 	let result = "";
// 	// si logro separar etiquetas de otras imprime correcto
// 	for(let i = 0; i < tags.length; i++){
// 		if( string.includes("<" + tags[i]) ){
// 			let x = string.split("<" + tags[i]);
// 			let y = x[1].split("</" + tags[i] + ">")
// 			tmp = x[0] + y[0];
// 			let z = y[0].split(">");
// 			result = `<span class="jade-tags"> ${tags[i]} </span> <span class="class-tags">(${z[0]}) </span> ${z[1]}`;
// 			console.log( result );
// 		}
// 	}
// 	return result;
// }
// function separaGroupTags (string, tags, tagsjade) {
// 	let tmp = [];
// 	let tmpString = string;
// 	let result = [];
// 	let arrayTag = [];
// 	// for (let i = 0; i < tags.length; i++){
// 	// 	if( string.includes("</"+tags[i]+">") ){
// 	// 		arrayTag.push(string.split( "</"+tags[i]+">")[0] + "</"+tags[i]+">");
// 	// 	}
// 	// }
// 			// console.log(tags);
// 			// console.log(string);
// 	for (let i = 0; i < tags.length; i++) {
// 		// console.log( string.match(tags[i]) );
// 		if ( tmpString.includes( tags[i] ) && tags[i] != undefined && tags != "") {
// 			tmp.push(tags[i]);
// 			// console.log(tmp);
// 			for (let i = 0; i < tmp.length; i++){
// 				arrayTag = string.split(tmp[i]) ; // ["", 0: " type="button" class="btn btn-primary">Primary</button>"...]
// 				console.log(arrayTag);
// 			}
// 		}
// 	}
// 	// for (let i = 0; i < arrayTag.length; i++){
// 	// 	result.push( tmp[1] + arrayTag[i] ); // ["", 0: " type="button" class="btn btn-primary">Primary</button>"...]
// 	// 	console.log(result);
// 	// }
// 	return result;
// }
// function translateHtml (html, tags) {
// 	// let html = '<button class="hola" id="hola">Success</button>';
// 	// let reg = new RegExp(/<(button.)(.*\=.*\">).*<\/(button)>/g);
// 	let x = html.replace(/<(button.)(.*\=.*\")>(.*)<\/button>/g,  "$1($2) $3");
// 	console.log(x);
// }
// // translateHtml ('<button type="button" class="btn btn-primary">Primary</button>');
// // cicloItemTags ('<button type="button" class="btn btn-primary">Primary</button> <button type="button" class="btn btn-secondary">Secondary</button>', tags);
// var html2 = `
// <a class="btn btn-primary" href="#" role="button">Link</a>
// <button class="btn btn-primary" type="submit">Button</button>
// <input class="btn btn-primary" type="button" value="Input">
// <input class="btn btn-primary" type="submit" value="Submit">
// <input class="btn btn-primary" type="reset" value="Reset">`;
// var html =
// `<button type="button" class="btn btn-primary">Primary</button>
// <button type="button" class="btn btn-secondary">Secondary</button>
// <button type="button" class="btn btn-success">Success</button>
// <button type="button" class="btn btn-danger">Danger</button>
// <button type="button" class="btn btn-warning">Warning</button>
// <button type="button" class="btn btn-info">Info</button>
// <button type="button" class="btn btn-light">Light</button>
// <button type="button" class="btn btn-dark">Dark</button>
// <button type="button" class="btn btn-link">Link</button>`;
// separaGroupTags(html, openTags);