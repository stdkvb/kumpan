import Pristine from './Pristine'

// const successfully = document.getElementById('successfully')

const takeControlForms = () => {

	const callRequestForm = document.getElementById("call-request");	
	if (callRequestForm !== null) {
		const callRequestValidator = new Pristine(callRequestForm);
		callRequestForm.addEventListener('submit', function (e) {
			if (callRequestValidator.validate() == true) {
				e.preventDefault();
				console.log('validate')
				// setTimeout(function () {
				// 	successfully.classList.add('_open');
				// }, 1000)
			} else {
				e.preventDefault();
				console.log('novalidate')
			}
		});
	}
}

export default takeControlForms
