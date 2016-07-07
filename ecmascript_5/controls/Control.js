function Control (locator) {
    this.element = $(locator);
}

Control.prototype.element = function (path) {
    return this.element; 
};

module.exports = Control;