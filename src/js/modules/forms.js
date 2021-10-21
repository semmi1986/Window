import checkNumberForm from './checkNumberForm';

const forms = (state) => {

	const $forms = document.querySelectorAll('form'),
		$inputs = document.querySelectorAll('input');
	// $phoneInput = document.querySelectorAll('input[name="user_phone"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Ваше сообщщение отправленно',
		fail: 'Ошибка'
	};

	//Валидация поля input номер телефона
	checkNumberForm('input[name="user_phone"]');
	//Валидация поля input номер телефона
	/* 	$phoneInput.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\D/, '');
			});

		}); */

	const postData = async (url, data) => {
		document.querySelector('.status').innerHTML = message.loading;

		let result = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await result.text();
	};
	
	// чистим поля инпутов в формах
	const clearInputForm = () => {
		$inputs.forEach(itemInput => {
			itemInput.value = '';
		});
	};

	// чистим объект state
	const clearState = () => {
		for (let key in state) {
			delete state[key];
		}
	};

	$forms.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			//сождание блок ответа запроса
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			// добавляем данные из формы calc
			if (item.getAttribute('data-atribut') == "end") {
				for (let key in state) {
					formData.append(key, state[key]);
				}

				clearState();
			}

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					statusMessage.textContent = message.success;
				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					clearInputForm();
					setTimeout(() => {
						statusMessage.remove();
					}, 2000);
					clearState();
				});

		});
	});


};

export default forms;