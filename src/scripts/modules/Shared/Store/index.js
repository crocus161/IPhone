class SuperStore {
	constructor() {
		this.state = {};
		this.observers = [];
	}

	subscribe(callback) {
		if (typeof callback !== 'function') {
			throw new Error('Callback must be a function');
		}

		this.observers.push(callback);
	}

	notify() {
		this.observers.forEach(callback => callback(this.state));
	}
}

export default SuperStore;