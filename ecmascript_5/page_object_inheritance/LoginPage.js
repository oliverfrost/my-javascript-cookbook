var BasePage = require('./BasePage');

function LoginPage() {
    LoginPage.super_.apply(this, arguments);

    // properties
    this.loginPageValue = "Login Page Value";
}

LoginPage.super_ = BasePage;

LoginPage.prototype = Object.create(BasePage.prototype, {
    constructor: {
        value: LoginPage,
        enumerable: false
    }
});

// methods
LoginPage.prototype.loginPageMethod = function () {
    console.log("I`m login page method.");
};

module.exports = LoginPage;
