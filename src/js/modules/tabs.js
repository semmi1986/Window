const tabs = (tabsSelrctor, parentsSelector, contantSelector, activSelector, display = "block") => {
	const $tabs = document.querySelectorAll(tabsSelrctor),
		$parentElement = document.querySelector(parentsSelector),
		$contant = document.querySelectorAll(contantSelector);




	function hideClassActiv() {
		$contant.forEach(itemCont => {
			itemCont.style.display = 'none';
		});

		$tabs.forEach(itemTab => {
			itemTab.classList.remove(activSelector);
		});
	}

	function showClassActiv(i = 0) {
		$contant[i].style.display = display;
		$tabs[i].classList.add(activSelector);
	}

	hideClassActiv();
	showClassActiv();



	$parentElement.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains(tabsSelrctor.replace(/\./, "")) || target.parentNode.classList.contains(tabsSelrctor.replace(/\./, ""))) {
			$tabs.forEach((item, key) => {
				if (target == item || target.parentNode == item) {
					hideClassActiv();
					showClassActiv(key);
				}
			});
		}

	});


};

export default tabs;