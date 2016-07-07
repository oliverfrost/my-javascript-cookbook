let Control = require("./Control");

class Input extends Control {

	get value() {
		return this.element.getAttribute("value")
	}

	set value(v) {
		this.element.clear().sendKeys(v)
	}

}

module.exports = Input;