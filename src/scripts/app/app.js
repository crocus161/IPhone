import { app } from './template';
import { getElement } from '../utils/getElement';
import PowerOnScreen from '../modules/PowerOnScreen';
import SleepModeScreen from '../modules/SleepModeScreen';
import LockScreen from '../modules/LockScreen';
import MainScreen from '../modules/MainScreen';

class App {
	constructor(startElementSelector) {
		this.root = getElement(startElementSelector);
		this.init();
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);
		new PowerOnScreen(this.powerOnCallback);

		this.powerOnCallback();
	}

	powerOnCallback() {
		// new SleepModeScreen();
		// new LockScreen();
		new MainScreen();
	}

	get template() {
		return app();
	}
}

export default App;