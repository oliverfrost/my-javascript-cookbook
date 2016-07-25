function Animal() {
    this.walked = false;
}

Animal.prototype.walk = function walk() {
    console.log('Walking...');
    this.walked = true;
};

Animal.prototype.hasBeenWalked = function hasBeenWalked() {
    return this.walked
};

module.exports = Animal;