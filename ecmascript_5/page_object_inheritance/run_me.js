var LoginPage = require('./LoginPage'),
    loginPage = new LoginPage();


console.log(loginPage.loginPageValue);
console.log(loginPage.basePageValue);
loginPage.loginPageMethod();
loginPage.basePageMethod();