import Application from '../../Shared/Application';
import { mockAppIcon } from '../../icons/mock-app';

class TodoApp extends Application {
	constructor() {
		super({ name: 'Todo', icon: mockAppIcon });
	}
}

export default TodoApp;