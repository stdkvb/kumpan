// import takePreloaderOnload from './ElementsControllers/PreloaderController'
import takeControlMenu from './ElementsControllers/MenuController'
import takeControlDropdown from "./ElementsControllers/DropdownController";
import takeControlCustomSelect from "./ElementsControllers/CustomSelectController";
import takeControlNumberInput from "./ElementsControllers/NumberInputController";
import takeControlPhoneMask from './ElementsControllers/PhoneMask'
import takeControlForms from './ElementsControllers/FormController'
import takeControlFavorite from './ElementsControllers/FavoriteController'
import takeControlLoadMore from './ElementsControllers/LoadMoreController'
import CookieController from './ElementsControllers/CookieController'
import takeControlModal from './ElementsControllers/ModalController'
import takeControlCoffeeTabs from './ElementsControllers/CoffeeTabsController';

takeControlMenu()
takeControlPhoneMask()
takeControlForms()
takeControlDropdown()
takeControlCustomSelect('custom-select')
takeControlNumberInput()
takeControlFavorite()
takeControlLoadMore()
CookieController('.cookie-container', '.cookie-accept')
takeControlModal()
takeControlCoffeeTabs()

// window.onload = () => {
// 	takePreloaderOnload()
// }  

/* Код ниже для возвращения исходной высоты мобильному меню (100vh) 
после ресайза экрана */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	// document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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
	autoHeight: true
})

const RestaurantGallerySwiper = new Swiper ('.restaurant-gallery__slider', {
	loop: false,
	watchOverflow: true,
	slidesPerGroup: 1,
	navigation: {
		nextEl: '.swiper-navigation-next',
		prevEl: '.swiper-navigation-prev'
	},
	breakpoints: {
		360: {
			spaceBetween: 0,
		},
		576: {
			spaceBetween: 10,
			slidesPerView: 1.5
		},
		992: {
			spaceBetween: 20,
			slidesPerView: 2.5
		}
	}	
})

// Coffee slider
const CoffeeMainSwiper = new Swiper('.coffee-preview__slider_main', {
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-navigation-next',
		prevEl: '.swiper-navigation-prev'
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	simulateTouch: false,
	grabCursor: false,
	autoHeight: false,
	thumbs: {
		// Свайпер с миниатюрами
		// и его настройки
		swiper: {
			el: '.coffee-preview__slider_secondary',
			slidesPerView: 5,
			slideToClickedSlide: true,
			touchRatio: 1,
			direction: 'vertical',
			spaceBetween: 20
		}
	}
});


// coffee-tab's Slider
const CoffeeTabsSwiper = new Swiper ('.coffee-tabs__tabs', {
	slidesPerView: 'auto',	
	watchOverflow: true,
	spaceBetween: 30
})

