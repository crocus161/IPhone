import {template} from './template';
import Screen from '../../Shared/Screen';
import SleepModeScreenStore from './store';
import { getElement } from '../../utils/getElement';
import LockScreenStore from '../LockScreen/store';

class SleepModeScreen extends Screen{
	constructor() {
		super();
		this.screen = null;

		this.init();
		this.screen.addEventListener('click', SleepModeScreenStore.toggleOnStatus);
		this.powerButton.addEventListener('click', SleepModeScreenStore.toggleOnStatus);

		SleepModeScreenStore.subscribe(this.observerCallback.bind(this));
	}

	observerCallback(state) {
		this.screen.classList[state.isModeOn ? 'remove' : 'add']('sleep__close');

		setTimeout(() => {
			if(state.isModeOn) LockScreenStore.changeShownStatus(true);
		}, 350);
	}

	init() {
		super.init();
		this.screen = getElement('.sleep');
	}

	get template() {
		return template();
	}
}

export default SleepModeScreen;