import { app } from './template';
import { getElement } from '../utils/getElement';
import PowerOnScreen from '../modules/Screen/PowerOnScreen';
import PhoneButtonAnimations from '../modules/Common/PhoneButtonAnimations';
import SleepModeScreen from '../modules/Screen/SleepModeScreen';
import LockScreen from '../modules/Screen/LockScreen';

class App {
	constructor(startElementSelector) {
		this.root = getElement(startElementSelector);

		this.init();
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);

		new PhoneButtonAnimations();
		new PowerOnScreen(this.powerOnCallback);

		// this.powerOnCallback();
	}

	powerOnCallback() {
		new SleepModeScreen();
		new LockScreen();
	}

	get template() {
		return app();
	}
}

export default App;