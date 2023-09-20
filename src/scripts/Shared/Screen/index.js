import { getElement } from '../../utils/getElement';

class Screen {

	constructor() {
		this.root = getElement('#screen');
		this.powerButton = getElement('.phone__power');
	}

	init() {
		this.root.insertAdjacentHTML('afterbegin', this.template);
	}

	get template () {}
}

export default Screen;