import { lockTime, template } from './template';
import Screen from '../../Shared/Screen';
import DateTimeFormatter from '../../Shared/DateTimeFormatter';
import { getElement } from '../../../utils/getElement';
import LockScreenActions from './modules/LockScreenActions';
import LockScreenSwipe from './modules/LockScreenSwipe';

class LockScreen extends Screen{

	constructor() {
		super();
		this.init();

		new LockScreenActions(
			getElement('.lock__flashlight'),
			getElement('.lock__camera')
		);

		new LockScreenSwipe(this.root, this.lockScreen);
	}

	init() {
		super.init();

		this.lockScreen = getElement('.lock');
		this.timeElement = getElement('.lock__meta-time');

		this.refreshTimeInLayout();
	}

	refreshTimeInLayout() {
		setInterval(() => {
			const newTime = DateTimeFormatter.currentTime();
			this.timeElement.innerHTML = lockTime(newTime);
		}, 60000);
	}

	get template() {
		return template(
			DateTimeFormatter.currentTime(),
			DateTimeFormatter.lockScreenFormatDate()
		);
	}

	static toggleLockScreen() {
		setTimeout(() => {
			getElement('.lock').style.bottom = '-1px';
		}, 350);
	}
}

export default LockScreen;