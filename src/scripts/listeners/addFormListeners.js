import takeControlForms from '../ElementsControllers/FormController'

function addFormListeners() {
	document.addEventListener('click', (e) => {
		if (e.target.hasAttribute('type') && e.target.getAttribute('type') === 'submit') {
			takeControlForms()
		}
	})
}

export default addFormListeners
