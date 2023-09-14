import Screen from '../../../../Shared/Screen';
import { template } from './template';

class MainScreenCenter extends Screen {
	constructor(screen) {
		super();
		this.screen = screen;

		this.init();
	}

	init() {
		this.screen.insertAdjacentHTML('afterbegin', this.template);
	}

	get template() {
		return template();
	}
}

export default MainScreenCenter;