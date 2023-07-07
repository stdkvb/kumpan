const takePreloaderOnload = () => {
	let percent = document.querySelector('.preloader__value');

	const imageLoaded = document.querySelector('.preloader__images_loaded')
	 
	for (let i = 100; i >= 0; i--) {
		window.setTimeout(function () {
			let result = 'clip-path: inset(' + i + '% 0 0 0)';
			imageLoaded.setAttribute('style', result);
		}, 2000);
		console.log(i);
	}

	document.body.classList.remove('_loaded')

	window.setTimeout(function () {
		document.body.classList.add('_loaded')
		// imageLoaded.classList.add('_active')
	}, 500);
	 
}

export default takePreloaderOnload
