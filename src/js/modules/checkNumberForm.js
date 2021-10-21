const checkNumberForm = (selector) => {
	const $inputSelector = document.querySelectorAll(selector);

	$inputSelector.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});

};

export default checkNumberForm;