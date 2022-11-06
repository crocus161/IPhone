import { getElement } from '../../../../utils/getElement';

class LockScreenActions {
	constructor(flashlightButton, cameraButton) {
		this.actionAnimation(cameraButton);
		this.actionAnimation(flashlightButton, this.toggleFlashlight.bind(this));
	}

	actionAnimation(button, onActiveCallback) {
		const animationTime = 350;
		let timeout, isActive = false;
		const animateAttr = 'data-animate';

		button.addEventListener('mousedown', () => {
			button.classList.add('mousedown');

			timeout = setTimeout(() => {
				button.setAttribute(animateAttr, 'true');
			}, animationTime);
		});

		window.addEventListener('mouseup', () => {
			button.classList.remove('mousedown');

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
	}
}

export default LockScreenActions;