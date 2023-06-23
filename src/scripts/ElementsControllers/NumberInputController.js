const takeControlNumberInput = () => {
	const incrementButtons = document.querySelectorAll('.increment')
	const decrementButtons = document.querySelectorAll('.decrement')

	incrementButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.previousElementSibling.value = parseInt(elem.previousElementSibling.value) + 1
			const price = elem.parentElement.previousElementSibling.firstElementChild.innerHTML
			const quantity = elem.previousElementSibling.value
			const subtotal = parseFloat(price * quantity)
			elem.parentElement.nextElementSibling.firstElementChild.innerHTML = subtotal
			subtotalSum()
			totalSum()
		})
	})

	decrementButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.nextElementSibling.value = parseInt(elem.nextElementSibling.value) - 1
			const price = elem.parentElement.previousElementSibling.firstElementChild.innerHTML
			const quantity = elem.nextElementSibling.value
			const subtotal = parseFloat(price * quantity)
			elem.parentElement.nextElementSibling.firstElementChild.innerHTML = subtotal
			subtotalSum()
			totalSum()
		})
	})
}

export default takeControlNumberInput;