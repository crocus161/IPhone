import { template } from './template';

class SwipeLine {
	constructor(parent) {
		parent.insertAdjacentHTML('beforeend', this.template);
	}

	get template() {
		return template();
	}
}

export default SwipeLine;