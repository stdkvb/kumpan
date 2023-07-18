const takeControlTimer = () => {

	const timerLink = document.querySelector('.timer_link')
	const timer = document.querySelector('#timer')
	let time

	if (timer !== undefined) {
		const outTimer = () => {
			timerLink.classList.add('_disabled')
			timerLink.classList.remove('_active')

			time = 11

			timer.textContent = " 0:" + time

			setInterval(() => {
				if (time <= 0) {
					timerLink.classList.remove('_disabled')
					timerLink.classList.add('_active')
				} else if (time <= 10) {
					timer.textContent = " 0:0" + --time
				} else {
					timer.textContent = " 0:" + --time
				}			
			}, 1000)
		}	
		

		timerLink.addEventListener("click", (e) => {
			e.preventDefault()
			outTimer()
			console.log(time)
		})
		
	}	
}

export default takeControlTimer
