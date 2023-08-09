function preloader(_success) {
	const preloader = document.querySelector('.preloader');
	const percent = document.querySelector('.preloader__value');
	const img = document.querySelector('.preloader__images_loaded');
	preloader.classList.remove('_loaded');
	img.classList.remove('_active');
	var w = 0,
			t = setInterval(function() {
					w = w + 2;
					percent.textContent = w+'%';
					if (w === 100){
						preloader.classList.add('_loaded');
						img.classList.add('_active');
							clearInterval(t);
							w = 0;
							if (_success){
									return _success();
							}
					}
			}, 0.1);
}

export default preloader

