import Pristine from './Pristine'
// import takeControlModal from './ModalController';

const takeControlForms = () => {

	const callRequestForm = document.querySelector(".call-request__form form");	
	if (callRequestForm !== null) {
		const callRequestValidator = new Pristine(callRequestForm);
		callRequestForm.addEventListener('submit', function (e) {
			e.preventDefault();

			if (callRequestValidator.validate() == true) {
				setTimeout(function () {
					// popupOpen(document.querySelector('.successfully'));
				}, 500)
			}
		})
	}

	const reviewForms = document.querySelectorAll(".review__form form");	
	if (reviewForms.length > 0) {
		reviewForms.forEach((elem) => {
			const reviewValidator = new Pristine(elem);
			elem.addEventListener('submit', function (e) {
				e.preventDefault();

				if (reviewValidator.validate() == true) {
					setTimeout(function () {
						// popupOpen(document.querySelector('.successfully'));
					}, 500)
				}
			})
		})
	}

	const CommentReviewForms = document.querySelectorAll(".coffee-review__comment form");	
	if (CommentReviewForms.length > 0) {
		CommentReviewForms.forEach((elem) => {
			const reviewValidator = new Pristine(elem);
			elem.addEventListener('submit', function (e) {
				e.preventDefault();

				if (reviewValidator.validate() == true) {
					setTimeout(function () {
						// popupOpen(document.querySelector('.successfully'));
					}, 500)
				}
			})
		})
	}

	

	
}

export default takeControlForms
