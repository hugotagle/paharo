angular.module('paharo.controllers', [])

.controller('SplashController', ['$scope', '$state', '$ionicViewService', function ($scope, $state, $ionicViewService) {

    // if registered in local storage
    //    then there's already username and password (and token) in local storage as well
    //      use username/password to re-authenticate
    //      if authentication failed
    //         go to login. User could have changed password thru PilotCredentials
    //      else a new token is issued
    //         go to home since profile id is returned with token
    // else ... not in local storage
    //    show this splash with buttons to login and register
    //   
    
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
            // authenticate with username password
            // if authentication failed
            //   pop up? stay put
            // else 
            //   local storage registered, username, password, token
            //   go home
            //
            $state.go('home');
        }
}])
    //
    // Home
    //
    .controller('HomeController', ['$scope', '$state', '$ionicViewService', function ($scope, $state, $ionicViewService) {
        
        $scope.profile = function () {
            $state.go('profile');
        }
}]);