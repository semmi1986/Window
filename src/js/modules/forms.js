const forms = () => {

	const $forms = document.querySelectorAll('form'),
		$inputs = document.querySelectorAll('input');

	const message = {
		loading: 'Загрузка...',
		success: 'Ваше сообщщение отправленно',
		fail: 'Ошибка'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').innerHTML = message.loading;

		let result = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await result.text();

	};

	$forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			//сождание блок ответа запроса
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					$forms.reset();
				});

		});
	});


};

export default forms;