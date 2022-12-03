import {template} from './template';
import Screen from '../../Shared/Screen';
import { getElement } from '../../../utils/getElement';
import CustomEvent from '../../Shared/CustomEvent';

class PowerOnScreen extends Screen{

	constructor(powerOnCallback) {
		super();
		this.powerOnCallback = powerOnCallback;

		this.timeout = 4000;
		this.closeAnimationTime = 550;

		CustomEvent.mousehold(this.powerButton, this.powerButtonHandler.bind(this), this.timeout);
	}

	powerButtonHandler() {
		this.isPowerOn ? this.powerOff() : this.powerOn();
	}

	powerOn() {
		this.init();
		setTimeout(() => {
			this.remove();
			this.isPowerOn = true;
			this.powerOnCallback();
		}, this.timeout);
	}

	powerOff() {
		this.root.innerHTML = '';
		this.isPowerOn = false;
		window.location.reload();
	}

	init() {
		super.init();
		this.screen = getElement('.power__on');
	}

	remove() {
		setTimeout(() => {
			this.screen.remove();
		}, this.closeAnimationTime);
		this.screen.classList.add('power__on-close');
	}

	get template() {
		return template(this.isPowerOn);
	}
}

export default PowerOnScreen;