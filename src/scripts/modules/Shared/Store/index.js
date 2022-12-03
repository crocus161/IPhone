class SuperStore {
	constructor() {
		this.state = {};
		this.observersList = [];
	}

	subscribe(callback) {
		this.observersList.push(callback);
	}

	observer() {
		this.observersList.forEach(callback => callback(this.state));
	}
}

export default SuperStore;