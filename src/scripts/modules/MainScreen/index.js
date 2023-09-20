import Screen from '../../Shared/Screen';
import { template } from './template';
import { getElement } from '../../utils/getElement';
import MainScreenCenter from './modules/MainScreenCenter';

class MainScreen extends Screen {
	constructor() {
		super();
		this.init();
	}

	init() {
		super.init();

		const screen = getElement('#main');
		new MainScreenCenter(screen);
	}

	get template() {
		return template();
	}
}

export default MainScreen;