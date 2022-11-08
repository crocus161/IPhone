import { getElement } from '../../../utils/getElement';

class CustomEvent {
	static mousehold(element, callback, time) {
		let timeout;

		element.addEventListener('mousedown', () => {
			timeout = setTimeout(callback, time);
		});

		window.addEventListener('mouseup', () => {
			clearTimeout(timeout);
		});
	}

	static swipeUp(root, startCallback, moveCallback, endCallback ) {
		let isSwipeAllowed = false;
		let moveY, animationProgress, pixelProgress;
		const {y, height} = root.getBoundingClientRect();

		root.addEventListener('pointerdown', event => {
			isSwipeAllowed = startCallback(event);
		});

		root.addEventListener('pointermove', event => {
			if(!isSwipeAllowed) return;
			moveY = (event.clientY - y) / height * root.offsetHeight;

			const pixelProgress = height - moveY;
			animationProgress = (pixelProgress / (height / 100)).toFixed(10);

			moveCallback(pixelProgress, animationProgress);
		});

		root.addEventListener('pointerup', () => {
			endCallback(pixelProgress, animationProgress);
			isSwipeAllowed = false;
		});
	}
}

export default CustomEvent;