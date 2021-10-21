const teimer = (parentSelector, dataSetting) => {
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> teimer <<<<<<<<<<<<<<<<<<<<<<<<<<<<<


	function getTimerValue(enemyTime) {
		//разница между установленной датой dataSetting и текущей
		const time = Date.parse(enemyTime) - Date.parse(new Date()),
			//находим кол-во дней, часов, минут, секунд в зависимости от time(значение в миллисекундах)
			days = Math.floor(time / (1000 * 60 * 60 * 24)),
			//остаток от деления возращаем нам кол-во часов 
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			minets = Math.floor((time / (1000 * 60)) % 60),
			seconds = Math.floor((time / 1000) % 60);

		return {
			"time": time,
			"days": days,
			"hours": hours,
			"minets": minets,
			"seconds": seconds
		};
	}

	function getZero(num) {
		if (num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setTimerValue(selector, enemyTime) {
		let $timer = document.querySelector(selector),
			$days = $timer.querySelector('#days'),
			$hours = $timer.querySelector('#hours'),
			$minutes = $timer.querySelector('#minutes'),
			$seconds = $timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock(params) {
			const t = getTimerValue(enemyTime);
			$days.innerHTML = getZero(t.days);
			$hours.innerHTML = getZero(t.hours);
			$minutes.innerHTML = getZero(t.minets);
			$seconds.innerHTML = getZero(t.seconds);

			if (t.time <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setTimerValue(parentSelector, dataSetting);
}

export default teimer;