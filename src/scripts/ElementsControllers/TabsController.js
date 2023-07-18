const takeControlTabs = () => {
	const coffeeTabs = document.querySelectorAll('.coffee-tabs__tab')
	const firstCoffeeTab = document.getElementById('coffee-tab-1')
	const secondCoffeeTab = document.getElementById('coffee-tab-2')
	const thirdCoffeeTab = document.getElementById('coffee-tab-3')
	const coffeeTabContents = document.querySelectorAll('.coffee-tabs__content')
	const firstCoffeeTabContent = document.getElementById('coffee-tab-content-1')
	const secondCoffeeTabContent = document.getElementById('coffee-tab-content-2')
	const thirdCoffeeTabContent = document.getElementById('coffee-tab-content-3')

	const cakeTabs = document.querySelectorAll('.cake-detail__tab')
	const firstCakeTab = document.getElementById('cake-tab-1')
	const secondCakeTab = document.getElementById('cake-tab-2')
	const cakeTabContents = document.querySelectorAll('.cake-detail__content')
	const firstCakeTabContent = document.getElementById('cake-tab-content-1')
	const secondCakeTabContent = document.getElementById('cake-tab-content-2')

	if (firstCoffeeTab !== null) {
		function resetCooffeeActiveTabs () {
			coffeeTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			coffeeTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		coffeeTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetCooffeeActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstCoffeeTab.addEventListener('click', () => {
			firstCoffeeTabContent.classList.add('_active')
		})
		secondCoffeeTab.addEventListener('click', () => {
			secondCoffeeTabContent.classList.add('_active')
		})
		thirdCoffeeTab.addEventListener('click', () => {
			thirdCoffeeTabContent.classList.add('_active')
		})
	}

	if (firstCakeTab !== null) {
		function resetCakeActiveTabs () {
			cakeTabs.forEach((elem) => {
				elem.classList.remove('_active')
			})
			cakeTabContents.forEach((elem) => {
				elem.classList.remove('_active')
			})
		}

		cakeTabs.forEach((elem) => {
			elem.addEventListener('click', () => {
				resetCakeActiveTabs()
				elem.classList.add('_active')
			})
		})

		firstCakeTab.addEventListener('click', () => {
			firstCakeTabContent.classList.add('_active')
		})
		secondCakeTab.addEventListener('click', () => {
			secondCakeTabContent.classList.add('_active')
		})
	}
}

export default takeControlTabs
