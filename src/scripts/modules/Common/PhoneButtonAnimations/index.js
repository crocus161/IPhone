import { getElement } from '../../../utils/getElement';

class PhoneButtonAnimations {
	constructor() {
		this.powerButton = getElement('.phone__power');
		this.volumeUpButton = getElement('.phone__volume-up')
		this.volumeDownButton = getElement('.phone__volume-down');

		this.animationInit(this.powerButton);
		this.animationInit(this.volumeUpButton);
		this.animationInit(this.volumeDownButton);
	}

	animationInit(element) {
		element.addEventListener('mousedown', () => {
			element.classList.add('active');
		});

		window.addEventListener('mouseup', () => {
			element.classList.remove('active');
		});
	}
}

export default PhoneButtonAnimations;