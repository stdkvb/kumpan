import takeControlMenu from './ElementsControllers/MenuController'
import takeControlDropdown from "./ElementsControllers/DropdownController";
import takeControlCustomSelect from "./ElementsControllers/CustomSelectController";
import takeControlNumberInput from "./ElementsControllers/NumberInputController";
import takeControlPhoneMask from './ElementsControllers/PhoneMask'
import takeControlForms from './ElementsControllers/FormController'
import takeControlFavorite from './ElementsControllers/FavoriteController'
import takeControlLoadMore from './ElementsControllers/LoadMoreController'

takeControlMenu()
takeControlPhoneMask()
takeControlForms()
takeControlDropdown()
takeControlCustomSelect('custom-select')
takeControlNumberInput()
takeControlFavorite()
takeControlLoadMore()


// Restaurant's cards


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