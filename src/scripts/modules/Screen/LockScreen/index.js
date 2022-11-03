import { lockTime, template } from './template';
import Screen from '../../Shared/Screen';
import DateTimeFormatter from '../../Shared/DateTimeFormatter';
import { getElement } from '../../../utils/getElement';

class LockScreen extends Screen{

	constructor() {
		super();

		this.setNewTime();
		this.setFullFormatDate();

		super.init();
		this.timeElement = getElement('.lock__meta-time');

		this.refreshTimeInLayout();
	}

	refreshTimeInLayout() {
		setInterval(() => {
			this.setNewTime();
			this.timeElement.innerHTML = lockTime(this.time);
		}, 60000);
	}

	setNewTime() {
		this.time = DateTimeFormatter.currentTime();
	}

	setFullFormatDate () {
		this.date = DateTimeFormatter.lockScreenFormatDate();
	}

	get template() {
		return template(this.time, this.date);
	}
}

export default LockScreen;