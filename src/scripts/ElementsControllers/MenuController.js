const takeControlMenu = () => {
	const burgerBtn = document.getElementById('burger-btn')
	const menu = document.getElementById('menu')



	function closeAllMenu() {
		menu.classList.remove('_active')
		document.body.classList.add('_lock')
	}


	burgerBtn.addEventListener('click', () => {
		closeAllMenu()
		menu.classList.add('_active')
	})


	// close menu button
	const menuCloseButtons = document.querySelectorAll('.close-btn')
	menuCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			closeAllMenu()
			document.body.classList.remove('_lock')
		})
	})
}

export default takeControlMenu
