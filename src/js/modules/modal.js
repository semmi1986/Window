const modals = () => {


	function getModalEcon(targetSelector, moduleSelector, closeSelector) {
		const $target = document.querySelectorAll(targetSelector),
			$modul = document.querySelector(moduleSelector),
			$closeModal = document.querySelector(closeSelector);


		$target.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				$modul.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		});

		$closeModal.addEventListener('click', () => {
			$modul.style.display = 'none';
			document.body.style.overflow = '';
		});

		$modul.addEventListener('click', (e) => {
			if (e.target === $modul) {
				$modul.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
	}


	function modulTimer(moduleSelector, timer) {
		setTimeout(() => {
			document.querySelector(moduleSelector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, timer);
	}

	getModalEcon('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	getModalEcon('.phone_link', '.popup', '.popup .popup_close');

	// modulTimer('.popup', 60000);

};

export default modals;