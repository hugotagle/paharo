angular.module('paharo.controllers', [])

.controller('SplashController', ['$scope', '$state', function ($scope, $state) {
    $scope.register = function () {
        $state.go('register');
    }
    $scope.login = function () {
        $state.go('login');
    }
}]);