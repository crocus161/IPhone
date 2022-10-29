import { app } from './template';
import { getElement } from '../utils/getElement';
import PowerOnScreen from '../modules/PowerOnScreen';
import PhoneButtonAnimations from '../modules/PhoneButtonAnimations';
import SleepModeScreen from '../modules/SleepModeScreen';

class App {
	constructor(startElementSelector) {
		this.root = getElement(startElementSelector);

		this.init();
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);

		new PhoneButtonAnimations();
		new PowerOnScreen(this.powerOnCallback);
	}

	powerOnCallback() {
		new SleepModeScreen();
	}

	get template() {
		return app();
	}
}

export default App;