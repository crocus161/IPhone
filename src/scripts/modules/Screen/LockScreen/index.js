import { lockTime, template } from './template';
import Screen from '../../Shared/Screen';
import DateTimeFormatter from '../../Shared/DateTimeFormatter';
import { getElement } from '../../../utils/getElement';
import LockScreenActions from './modules/LockScreenActions';

class LockScreen extends Screen{

	constructor() {
		super();

		this.setNewTime();
		this.setFullFormatDate();

		super.init();
		this.timeElement = getElement('.lock__meta-time');

		this.refreshTimeInLayout();

		new LockScreenActions(
			getElement('.lock__flashlight'),
			getElement('.lock__camera')
		);
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