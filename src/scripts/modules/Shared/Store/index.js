class SuperStore {
	constructor() {
		this.state = {};
		this.observers = [];
	}

	subscribe(callback) {
		this.observers.push(callback);
	}

	notify() {
		this.observers.forEach(callback => callback(this.state));
	}
}

export default SuperStore;