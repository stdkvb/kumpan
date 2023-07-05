const takeControlLoadMore = () => {
	const cardContainer = document.querySelector(".restaurants__list");
	const loadMoreButton = document.querySelector("#load-more");

	const cardLimit = 9;
	const cardIncrease = 3;

	const pageCount = Math.ceil(cardLimit / cardIncrease);

	let currentPage = 1;

	const createCard = (index, endRange) => {
		handleButtonStatus();

		const cards = document.querySelectorAll(".restaurants__item");

		for (let i = index - 1; i < endRange; i++) {
			cards[i].classList.add('_active');
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
		addCards(currentPage);
		loadMoreButton.addEventListener("click", (e) => {
			e.preventDefault();
			addCards(currentPage + 1);
		});
	};
}

export default takeControlLoadMore