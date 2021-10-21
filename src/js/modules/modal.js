const modals = () => {


	function getModalEcon(targetSelector, moduleSelector, closeSelector, iscloseDataModal = true) {
		const $target = document.querySelectorAll(targetSelector),
			$modul = document.querySelector(moduleSelector),
			$closeModal = document.querySelector(closeSelector),
			$dataModul = document.querySelectorAll('[data-modal]');


		$target.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				// находим все модальные окна по атрибуту и скрываем их
				$dataModul.forEach(item => {
					item.style.display = 'none';
				});

				$modul.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		});

		$closeModal.addEventListener('click', () => {
			// находим все модальные окна по атрибуту и скрываем их
			$dataModul.forEach(item => {
				item.style.display = 'none';
			});

			$modul.style.display = 'none';
			document.body.style.overflow = '';
		});

		$modul.addEventListener('click', (e) => {
			if (e.target === $modul && iscloseDataModal) {
				// находим все модальные окна по атрибуту и скрываем их
				$dataModul.forEach(item => {
					item.style.display = 'none';
				});
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
	getModalEcon('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	getModalEcon('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	getModalEcon('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

	// modulTimer('.popup', 60000);

};

export default modals;