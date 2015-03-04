angular.module('paharo.controllers', [])

.controller('SplashController', ['$scope', '$state', '$ionicViewService', function ($scope, $state, $ionicViewService) {

        // see if user is registered
//        if (window.localStorage.getItem("registered") === "undefined" || window.localStorage.getItem("registered") === null) {
//
//            $ionicViewService.nextViewOptions({
//                disableAnimate: true,
//                disableBack: true
//            });
//            // must register
//            $state.go('register');
//        }

        // pretend is stored
        //window.localStorage.setItem("registered", null);
        //window.localStorage.removeItem("registered");

//        $scope.status = "Making it this far means you are signed in";

        $scope.register = function () {
            $state.go('register');
        }
        $scope.login = function () {
            $state.go('login');
        }
}])
    //
    // Login
    //
    .controller('LoginController', ['$scope', '$state', '$ionicViewService', function ($scope, $state, $ionicViewService) {
        
        $scope.login = function () {
            alert('Login');
        }
}]);