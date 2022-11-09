import Screen from '../../Shared/Screen';
import {template} from './template';
import { getElement } from '../../../utils/getElement';
import LockScreen from '../LockScreen';

class SleepModeScreen extends Screen{
	constructor() {
		super();
		this.isSleepModeOn = false;

		this.init();
		this.powerButton = getElement('.phone__power');
		this.screen.addEventListener('click', this.toggleSleepModeOnStatus.bind(this));
		this.powerButton.addEventListener('click', this.toggleSleepModeOnStatus.bind(this));
	}

	init() {
		super.init();
		this.screen = getElement('.sleep');
	}

	destroy() {

	}

	toggleSleepModeOnStatus() {
		this.isSleepModeOn = !this.isSleepModeOn;
		this.screen.classList[this.isSleepModeOn ? 'remove' : 'add']('sleep__close');
		if(this.screen) LockScreen.toggleLockScreen();
	}

	get template() {
		return template();
	}
}

export default SleepModeScreen;