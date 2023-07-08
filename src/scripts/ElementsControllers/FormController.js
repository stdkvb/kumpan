import Pristine from './Pristine'

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
		});
	}
}

export default takeControlForms
