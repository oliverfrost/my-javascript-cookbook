function BasePage() {
    this.basePageValue = "Base Page Value";
}

BasePage.prototype.basePageMethod = function () {
    console.log("Base Page Method!");
};

module.exports = BasePage;