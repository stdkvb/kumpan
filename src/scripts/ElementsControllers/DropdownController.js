const takeControlDropdown = function () {
	const selects = document.querySelectorAll('.dropdown__button');
	selects.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.toggle('active')
		})
	})

	const options= document.querySelectorAll('.dropdown__options');
	options.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.remove('active')
		})
	})
};

export default takeControlDropdown;