import takeControlMenu from './ElementsControllers/MenuController'
import takeControlDropdown from "./ElementsControllers/DropdownController";
import takeControlCustomSelect from "./ElementsControllers/CustomSelectController";
import takeControlNumberInput from "./ElementsControllers/NumberInputController";
import takeControlPhoneMask from './ElementsControllers/PhoneMask'

takeControlMenu()
takeControlPhoneMask()
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
	loop: false,
	slidesPerView: 1,
	watchOverflow: true,
	slidesPerGroup: 1,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},
	autoHeight: true
})