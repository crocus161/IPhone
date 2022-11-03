
class DateTimeFormatter {

	constructor() {
	}

	static lockScreenFormatDate() {
		const date = new Date();
		const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

		return  {
			month: monthList[date.getMonth()],
			date: date.getDate(),
			day: daysList[date.getDay()]
		}
	}

	static currentTime() {
		const now = new Date();

		let hours = now.getHours(), minutes = now.getMinutes();
		if(minutes < 10) minutes = `0${minutes}`;

		return { hours, minutes };
	}
}

export default DateTimeFormatter;