import "./slider";
import modals from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {


	modals();
	tabs('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
	tabs('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
	forms();

});