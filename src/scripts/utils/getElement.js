
export const getElement = selector => {
	const element = document.querySelector(selector);
	if(!element) throw new Error(`DOM doesn\'t have any element with selector this - ${selector}`);
	return element;
}

export const getAllElements = selector => {
	const elements = document.querySelectorAll(selector);
	if(!elements.length) throw new Error(`DOM doesn\'t have any element with selector this - ${selector}`);
	return elements;
}