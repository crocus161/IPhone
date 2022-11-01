
class DateTimeFormatter {

	constructor() {
	}

	static lockScreenFormatDate() {
		const date = new Date();
		const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

		console.log(monthList[date.getMonth()], daysList[date.getDay()], date.getDate());
	}

	static currentTime() {
		const now = new Date();

		let hours = now.getHours(), minutes = now.getMinutes();
		if(minutes < 10) minutes = `0${minutes}`;

		return { hours, minutes };
	}
}

export default DateTimeFormatter;