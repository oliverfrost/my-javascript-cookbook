let Control = require("./Control");

class Select extends Control {

	get value() {
		return this.element.$('option:checked').getText();
	}

	set value(v) {
		return this.element.$(`option[label="${v}"]`).click()
	}
}

module.exports = Select;