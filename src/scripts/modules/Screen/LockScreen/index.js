import { lockTime, template } from './template';
import Screen from '../../Shared/Screen';
import DateTimeFormatter from '../../Shared/DateTimeFormatter';
import { getElement } from '../../../utils/getElement';

class LockScreen extends Screen{

	constructor() {
		super();

		this.setNewTime();
		super.init();

		this.timeElement = getElement('.lock__meta-time');
		this.refreshTimeInLayout();

		DateTimeFormatter.lockScreenFormatDate();
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

	get template() {
		return template(this.time, '');
	}
}

export default LockScreen;