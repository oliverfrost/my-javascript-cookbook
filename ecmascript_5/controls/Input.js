var Control = require('./Control');

function Input(control) {
    Input.super_.apply(this, arguments);
}

Input.super_ = Control;

Input.prototype = Object.create(Control.prototype, {
    constructor: {
        value: Input,
        enumerable: false
    }
});


Input.prototype.text = function(text) {
    if(text) {
        this.element.sendKeys(text);
    } else {
        return this.element.getAttribute("value");
    }
};

module.exports = Input;
