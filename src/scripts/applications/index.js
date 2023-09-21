import TodoApp from './Todo';

class ApplicationsStorage {
	constructor() {
		this.applications = [
			TodoApp,
			TodoApp,
			TodoApp,
			TodoApp,
		];
	}

	insertAll(screen) {
		this.applications.forEach(app => {
			const initializedApp = new app();

			screen.insertAdjacentHTML('afterbegin', initializedApp.template);
			initializedApp.init();
		});
	}
}

export default new ApplicationsStorage();