if (document.contentType === 'application/json') {
	/*
		renderjson, by caldwell
		https://github.com/caldwell/renderjson
		No LICENCE provided, assuming they're cool with me using their lib.
	*/
	var module;(module||{}).exports=renderjson=function(){var n=function(){for(var n=[];arguments.length;)n.push(t(s(Array.prototype.shift.call(arguments)),o(Array.prototype.shift.call(arguments))));return n},t=function(){for(var n=Array.prototype.shift.call(arguments),e=0;e<arguments.length;e++)arguments[e].constructor==Array?t.apply(this,[n].concat(arguments[e])):n.appendChild(arguments[e]);return n},e=function(n,t){return n.insertBefore(t,n.firstChild),n},r=function(n){for(var t in n)if(n.hasOwnProperty(t))return!1;return!0},o=function(n){return document.createTextNode(n)},s=function(n){var t=document.createElement("span");return n&&(t.className=n),t},l=function(n,t,e){var r=document.createElement("a");return t&&(r.className=t),r.appendChild(o(n)),r.href="#",r.onclick=function(){return e(),!1},r};function a(i,c,y,f,_,d){var h=y?"":c,p=function(r,a,i,c,y){var _,d=s(c),p=function(){_||t(d.parentNode,_=e(y(),l(u.hide,"disclosure",function(){_.style.display="none",d.style.display="inline"}))),_.style.display="inline",d.style.display="none"};t(d,l(u.show,"disclosure",p),n(c+" syntax",r),l(a,null,p),n(c+" syntax",i));var v=t(s(),o(h.slice(0,-1)),d);return f>0&&p(),v};return null===i?n(null,h,"keyword","null"):void 0===i?n(null,h,"keyword","undefined"):"string"==typeof i&&i.length>_?p('"',i.substr(0,_)+" ...",'"',"string",function(){return t(s("string"),n(null,h,"string",JSON.stringify(i)))}):"object"!=typeof i?n(null,h,typeof i,JSON.stringify(i)):i.constructor==Array?0==i.length?n(null,h,"array syntax","[]"):p("["," ... ","]","array",function(){for(var e=t(s("array"),n("array syntax","[",null,"\n")),r=0;r<i.length;r++)t(e,a(i[r],c+"    ",!1,f-1,_,d),r!=i.length-1?n("syntax",","):[],o("\n"));return t(e,n(null,c,"array syntax","]")),e}):r(i)?n(null,h,"object syntax","{}"):p("{","...","}","object",function(){var e=t(s("object"),n("object syntax","{",null,"\n"));for(var r in i)var l=r;var u=Object.keys(i);for(var y in d&&(u=u.sort()),u){r=u[y];t(e,n(null,c+"    ","key",'"'+r+'"',"object syntax",": "),a(i[r],c+"    ",!0,f-1,_,d),r!=l?n("syntax",","):[],o("\n"))}return t(e,n(null,c,"object syntax","}")),e})}var u=function n(e){var r=t(document.createElement("pre"),a(e,"",!1,n.show_to_level,n.max_string_length,n.sort_objects));return r.className="renderjson",r};return u.set_icons=function(n,t){return u.show=n,u.hide=t,u},u.set_show_to_level=function(n){return u.show_to_level="string"==typeof n&&"all"===n.toLowerCase()?Number.MAX_VALUE:n,u},u.set_max_string_length=function(n){return u.max_string_length="string"==typeof n&&"none"===n.toLowerCase()?Number.MAX_VALUE:n,u},u.set_sort_objects=function(n){return u.sort_objects=n,u},u.set_show_by_default=function(n){return u.show_to_level=n?Number.MAX_VALUE:0,u},u.set_icons("⊕","⊖"),u.set_show_by_default(!1),u.set_sort_objects(!1),u.set_max_string_length("none"),u}();

	const css = `<style>
		html {
			height: 100vh;
			background: #303030;
			color: #f2f2f2;
			font-size: 1.3em;
		}

		.raw {
			font-family: monospace;
		}

		a {
			color: crimson;
			text-decoration: none;
		}

		strong {
			font-family: Helvetica;
		}

		.renderjson a              { text-decoration: none; }
		.renderjson .disclosure    { color: crimson; font-size: 150%; }
		.renderjson .syntax        { color: grey; }
		.renderjson .string        { color: red; }
		.renderjson .number        { color: cyan; }
		.renderjson .boolean       { color: plum; }
		.renderjson .key           { color: lightblue; }
		.renderjson .keyword       { color: lightgoldenrodyellow; }
		.renderjson .object.syntax { color: lightseagreen; }
		.renderjson .array.syntax  { color: lightsalmon; }
		.highlight .nc { color: plum; font-weight: normal; }
		.highlight .nt { color: lightblue; }
	</style>`

	renderjson.set_show_to_level(2)

	window.onload = function() {
		const html = document.querySelector('html')
		const pageContent = html.innerText

		try {
			const json = JSON.parse(pageContent)

			document.body.innerHTML = `
				${css}

				<strong>Raw</strong>
				<br />
				
				<p class='raw'>
					${JSON.stringify(json)}
				<p>
				
				<strong>Rendered</strong>
				
				<br />
			`
			document.querySelector('body').appendChild(
				renderjson(json)
			)
		} catch(e) {
			console.error(e)
			document.body.innerHTML = `
				${css}
				
				Invalid JSON response.
				
				<br />
				<br />
				
				${pageContent}
			`
		}
	}
}