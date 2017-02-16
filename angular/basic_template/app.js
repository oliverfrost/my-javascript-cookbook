(function() {
    var myApp = angular.module('myApp', ['ngRoute']);

    myApp.controller('BaseCtrl', ['$scope', function($scope) {
        $scope.hello = 'Hello, World!';
    }]);
})();
