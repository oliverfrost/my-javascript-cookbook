class Control {
	constructor(locator) {
		this.control = $(locator);
	}
	get element() { return this.control }
	get displayed() { return this.element.isDisplayed() }
}

module.exports = Control;