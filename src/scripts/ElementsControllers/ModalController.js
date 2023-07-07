const takeControlModal = () => {
	const popupLinks = document.querySelectorAll('.popup-link');

	const body = document.querySelector('body');

	let unlock = true;
	const timeout = 400; // Равна времени в transition
	// let pageHash =  document.location.hash;

	if (popupLinks.length > 0) {
		
		
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];

			// if (pageHash) {
			// 	const popupNameOnload = pageHash.replace('#', '');
			// 	const currentPopupOnload = document.getElementById(popupNameOnload);
			// 	if (currentPopupOnload.classList.contains("product")) {
			// 		window.setTimeout(function () {
			// 			popupOpen(currentPopupOnload)
			// 		}, 1100);	
			// 	}						
			// }
			
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const currentPopup = document.getElementById(popupName);
				popupOpen(currentPopup);
				// if (!popupLink.classList.contains("products__item")) {
				// 	e.preventDefault();
				// }
			});
		}
	}

	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(currentPopup) {
		if (currentPopup && unlock) {
			const popupActive = document.querySelector('.popup._open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				bodyLock();
			}
			currentPopup.classList.add('_open');
			currentPopup.addEventListener('click', function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('_open');
			if (doUnlock) {
				bodyUnlock();
			}
		}
	}

	function bodyLock() {
		body.classList.add('_lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	function bodyUnlock() {
		setTimeout(function () {
			body.classList.remove('_lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}


	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойство
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();


export default takeControlModal