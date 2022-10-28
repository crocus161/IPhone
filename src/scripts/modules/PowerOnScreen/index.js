import {screen} from './template';
import Screen from '../Common/Screen';
import { getElement } from '../../utils/getElement';
import { COLORS } from '../../constants/colors';

class PowerOnScreen extends Screen{

	constructor() {
		super();
		this.timeout = 4000;
		this.closeAnimationTime = 550;
		this.isPowerOn = false;

		this.powerButton = getElement('.phone__power');
		this.powerButton.addEventListener('mousedown', this.powerButtonHandler.bind(this));
	}

	powerButtonHandler() {
		// Todo make realization of normal hold method and not only setTimeOut
		this.isPowerOn ? this.powerOff() : this.powerOn();
	}

	powerOn() {
		setTimeout(this.init.bind(this), this.timeout);
		setTimeout(this.remove.bind(this), this.timeout * 2);
		this.isPowerOn = true;
	}

	powerOff() {
		// Todo make realization of full power off with loading screen
		setTimeout(() => {
			this.root.innerHTML = '';
			this.root.style.background = COLORS.BLACK;
			this.isPowerOn = false;
		}, this.timeout);
	}

	init() {
		super.init();
		this.screen = getElement('.power__on');
	}

	remove() {
		setTimeout(() => {
			this.screen.remove();
			this.root.style.background = 'red';
		}, this.closeAnimationTime);
		this.screen.classList.add('power__on-close');
	}

	get template() {
		return screen(this.isPowerOn);
	}
}

export default PowerOnScreen;