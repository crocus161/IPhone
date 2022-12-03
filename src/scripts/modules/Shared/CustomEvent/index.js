
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

	static verticalSwipe(root, startCallback, moveCallback, endCallback ) {
		let isSwipeAllowed = false;
		let moveY, percentageProgress, pixelProgress;
		const {y, height} = root.getBoundingClientRect();

		root.addEventListener('pointerdown', event => {
			isSwipeAllowed = startCallback(event);
		});

		root.addEventListener('pointermove', event => {
			if(!isSwipeAllowed) return;
			moveY = (event.clientY - y) / height * root.offsetHeight;

			const pixelProgress = height - moveY;
			percentageProgress = (pixelProgress / (height / 100)).toFixed(10);

			moveCallback(pixelProgress, percentageProgress);
		});

		root.addEventListener('pointerup', () => {

			if(isSwipeAllowed) {
				endCallback(pixelProgress, percentageProgress);

				percentageProgress = 0;
				pixelProgress = 0;
			}

			isSwipeAllowed = false;
		});
	}
}

export default CustomEvent;