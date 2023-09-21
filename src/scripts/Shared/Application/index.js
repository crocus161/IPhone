import { template } from './template';
import { getElement } from '../../utils/getElement';

class Application {
	constructor({ name, icon }) {
		this.id = `${name}${Math.random().toFixed(30)}`.replace(/[.]/g, '').trim();
		this.meta = { id: this.id, name, icon };
	}

	open() {
		console.log(`hello world - out of element with id: ${this.id}`);
	}

	init() {
		this.block = getElement(`#${this.id}`);
		this.block.addEventListener('click', this.open.bind(this));
	}

	get template() {
		return template({ ...this.meta  });
	}
}

export default Application;