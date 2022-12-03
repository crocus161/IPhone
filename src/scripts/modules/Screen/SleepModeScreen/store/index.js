import SuperStore from '../../../Shared/Store';

class Store extends SuperStore {
	constructor() {
		super();
		this.state = { isModeOn: false };

		this.toggleOnStatus = this.toggleOnStatus.bind(this);
	}

	toggleOnStatus() {
		this.state.isModeOn = !this.state.isModeOn;
		this.observer();
	}

}

const SleepModeScreenStore = new Store();
export default SleepModeScreenStore;