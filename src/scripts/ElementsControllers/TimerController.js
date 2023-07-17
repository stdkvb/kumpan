const takeControlTimer = () => {

	const timerElement = document.querySelector('.timer_link')

	timerElement.classList.remove('_active')

	setTimeout(function () {
		timerElement.classList.add('_active')
	}, 5000)


	
}

export default takeControlTimer
