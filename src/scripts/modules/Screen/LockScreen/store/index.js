import SuperStore from '../../../Shared/Store';

class Store extends SuperStore {
	constructor() {
		super();
		this.state = { isShown: true };

		this.changeShownStatus = this.changeShownStatus.bind(this);
	}

	changeShownStatus(status) {
		this.state.isShown = status;
		this.observer();
	}

}

const LockScreenStore = new Store;
export default LockScreenStore;