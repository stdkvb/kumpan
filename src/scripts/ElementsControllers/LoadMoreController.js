const takeControlLoadMore = () => {
	const loadMoreButton = document.querySelector("#load-more");

	const cardLimit = 9;
	const cardIncrease = 6;

	const pageCount = Math.ceil(cardLimit / cardIncrease);

	let currentPage = 1;

	const createCard = (index, endRange) => {
		handleButtonStatus();

		const restaurantsCards = document.querySelectorAll(".restaurants__item");
		const coffeeCards = document.querySelectorAll(".coffee__item");
		console.log(restaurantsCards);

		if (restaurantsCards.length > 0) {
			for (let i = index - 1; i < endRange; i++) {
				restaurantsCards[i].classList.add('_active');
			}
		}
		if (coffeeCards.length > 0) {
			for (let i = index - 1; i < endRange; i++) {
				coffeeCards[i].classList.add('_active');
			}
		}		

	  };

	const addCards = (pageIndex) => {
		currentPage = pageIndex;

		handleButtonStatus();

		const startRange = (pageIndex - 1) * cardIncrease;
		const endRange = currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

		for (let i = startRange + 1; i <= endRange; i++) {
		  createCard(i, endRange);
		}
	};

	const handleButtonStatus = () => {
		if (pageCount === currentPage) {
		  loadMoreButton.classList.add("_disabled");
		}
	};

	window.onload = function () {

		if (loadMoreButton !== null) {
			addCards(currentPage);
			loadMoreButton.addEventListener("click", (e) => {
				e.preventDefault();
				addCards(currentPage + 1);
			});
		}		
	}
}

export default takeControlLoadMore