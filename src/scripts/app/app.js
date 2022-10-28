import { app } from './template';
import { getElement } from '../utils/getElement';
import PowerOnScreen from '../modules/PowerOnScreen';

class App {
	constructor(startElementSelector) {
		this.root = getElement(startElementSelector);

		this.init();
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);

		new PowerOnScreen();
	}

	get template() {
		return app();
	}
}

export default App;