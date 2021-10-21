import checkNumberForm from "./checkNumberForm";

const checkedElements = (state) => {

	const $windowForm = document.querySelectorAll('.balcon_icons_img'),
		$windowInputWidth = document.querySelectorAll('#width'),
		$windowInputHeight = document.querySelectorAll('#height'),
		$windowSelectType = document.querySelectorAll('#view_type'),
		$windowInputCheckbox = document.querySelectorAll('.checkbox');

	checkNumberForm('#width');
	checkNumberForm('#height');

	function bindActionToElement(elements, event, objKey) {
		elements.forEach((item, key) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case "SPAN":
						state[objKey] = key;
						break;
					case "INPUT":
						if (item.getAttribute('type') === 'checkbox') {
							item === 0 ? state[objKey] = "Холодное" : state[objKey] = "Теплое";

							elements.forEach((itemCheck, keyCheck) => {
								itemCheck.checked = false;
								if (item == itemCheck) {
									itemCheck.checked = true;
								}
							});

						} else {
							state[objKey] = item.value;
						}
						break;
					case "SELECT":
						state[objKey] = item.value;
						break;
				}
				console.log(state);
			});
		});
	}

	bindActionToElement($windowForm, 'click', 'form');
	bindActionToElement($windowInputWidth, 'input', 'width');
	bindActionToElement($windowInputHeight, 'input', 'height');
	bindActionToElement($windowSelectType, 'change', 'selectType');
	bindActionToElement($windowInputCheckbox, 'change', 'checkbox');


};

export default checkedElements;