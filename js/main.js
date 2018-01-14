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
			{ src: 'js/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: 'js/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'js/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		],

	}

	Reveal.initialize(options);
}
