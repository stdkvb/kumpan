import takeControlDropdown from "./ElementsControllers/DropdownController";
import takeControlCustomSelect from "./ElementsControllers/CustomSelectController";
import takeControlNumberInput from "./ElementsControllers/NumberInputController";

takeControlDropdown();
takeControlCustomSelect('custom-select');
takeControlNumberInput();

//swipers init
const firstScreenSwiper = new Swiper ('.first-screen', {
	pagination: {
		el: '.first-screen .swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	loop: true,
	slidesPerView: 1,
	watchOverflow: true,
	slidesPerGroup: 1,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	grabCursor: true,
})