import {phone} from './templates/template';
import { getElement } from '../utils/getElement';

class App {
	constructor(startElementSelector) {
		this.root = getElement(startElementSelector);

		this.init();
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);
	}

	get template() {
		return phone();
	}
}

export default App;