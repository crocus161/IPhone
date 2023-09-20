import { getElement } from '../../../utils/getElement';
import { flashlightIcon } from '../../../icons/flashlight';

class LockScreenActions {
	constructor() {
		this.cameraButton = getElement('.lock__camera');
		this.flashlightButton = getElement('.lock__flashlight');

		this.actionAnimation(this.cameraButton);
		this.actionAnimation(this.flashlightButton, this.toggleFlashlight.bind(this));
	}

	actionAnimation(button, onActiveCallback) {
		const animationTime = 350;
		let timeout, isActive = false;
		const animateAttr = 'data-animate';

		button.addEventListener('mousedown', () => {
			timeout = setTimeout(() => {
				button.setAttribute(animateAttr, 'true');
			}, animationTime);
		});

		window.addEventListener('mouseup', () => {
			clearTimeout(timeout);
			if(!button.dataset.animate) return;

			button.removeAttribute(animateAttr);
			button.classList[isActive ? 'remove' : 'add']('active');

			isActive = !isActive;
			onActiveCallback(isActive);
		});
	}

	toggleFlashlight(status) {
		const phoneFlashlight = getElement('.phone__flashlight');
		phoneFlashlight.classList[status ? 'add' : 'remove']('active');

		this.flashlightButton.innerHTML = flashlightIcon(status);
	}
}

export default LockScreenActions;