window.onload = function () {
	initReveal();
}

function initReveal () {
	var options = {
		controls: true,
		progress: true,
		history: true,
		center: false,
		transition: 'slide'
	}

	Reveal.initialize(options);
}
