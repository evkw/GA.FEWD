window.onload = function () {
	initReveal();
}

function initReveal () {
	var options = {
		controls: true,
		progress: true,
		history: true,
		center: false,

		transition: 'slide',

		// Optional reveal.js plugins
		dependencies: [
			// { src: '../lib/js/classList.js', condition: function() { return !document.body.classList; } },
			// { src: '../plugin/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			// { src: '../plugin/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			// { src: '../plugin/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
			// override highlight plugin in favor of actual hightlight.js library; needed for reveal-code-focus.js
			// { src: '../node_modules/highlight.js/lib/highlight.js' },
			// {
			// 	src: '../node_modules/reveal-code-focus/reveal-code-focus.js',
			// 	async: true,
			// 	callback: function() {
			// 		RevealCodeFocus();
			// 	}
			// },
			// { src: '../plugin/zoom-js/zoom.js', async: true },
			// { src: '../plugin/notes/notes.js', async: true }
		],

	}

	Reveal.initialize(options);
}
