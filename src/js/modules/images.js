const image = () => {
	const $imgPopup = document.createElement('div'),
		$worckSection = document.querySelector('.works'),
		$imgBig = document.createElement('img');

	$imgPopup.classList.add('popup');
	$imgPopup.style.justifyContent = "center";
	$imgPopup.style.alignItems = "center";
	$imgPopup.style.display = "none";

	$worckSection.appendChild($imgPopup);
	$imgPopup.appendChild($imgBig);

	$worckSection.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;

		if (target && target.classList.contains('preview')) {
			$imgPopup.style.display = "flex";
			document.body.style.overflow = 'hidden';
			$imgBig.style.maxWidth = '70%';
			$imgBig.style.maxWidth = '60%';
			$imgBig.style.borderRadius = '5px';

			const path = target.parentNode.getAttribute('href');
			$imgBig.setAttribute('src', path);
		}

		if (target && target.matches('div.popup')) {
			$imgPopup.style.display = "none";
			document.body.style.overflow = '';
		}

	});


};

export default image;