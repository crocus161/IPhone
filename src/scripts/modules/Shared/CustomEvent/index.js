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
}

export default CustomEvent;