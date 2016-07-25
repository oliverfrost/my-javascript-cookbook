var Animal = require('./animal'),
    inherits = require('util').inherits;

function Cat() {
    Animal.call(this);
}

inherits(Cat, Animal);

Cat.prototype.pat = function pat() {
    console.log('purr');
};

Cat.prototype.lasagna = function() {
    console.log('lasagna!');
    this.walked = true;
};

module.exports = Cat;