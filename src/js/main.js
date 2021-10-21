import "./slider";
import modals from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import checkedElements from "./modules/checkeElement";
import timer from './modules/timer';
import image from "./modules/images";


window.addEventListener('DOMContentLoaded', () => {

	let elementState = {
		form: 0
	};

	const dataSetting = '2021-12-18';

	checkedElements(elementState);
	modals();
	tabs('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
	tabs('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons_img', '.balcon_icons', '.big_img > img', 'do_image_more', 'inline-block');
	forms(elementState);
	timer('.container1', dataSetting);
	image();

});