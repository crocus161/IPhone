import Screen from '../../../../Shared/Screen';
import { template } from './template';
import { getElement } from '../../../../utils/getElement';
import ApplicationsStorage from '../../../../applications';

class MainScreenCenter extends Screen {
	constructor(screen) {
		super();
		this.screen = screen;

		this.init();
	}

	init() {
		this.screen.insertAdjacentHTML('afterbegin', this.template);
		ApplicationsStorage.insertAll(getElement('#mainApps'));
	}

	get template() {
		return template();
	}
}

export default MainScreenCenter;