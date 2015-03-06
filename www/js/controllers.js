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
    .controller('LoginController', ['$scope', '$rootScope', 'GlobalPC', '$state', '$ionicViewService', function ($scope, $rootScope, GlobalPC, $state, $ionicViewService) {

        $scope.login = function () {

            alert('username: ' + $scope.login.username + ', password: ' + $scope.login.password);

            GlobalPC.authenticate({
                username: $scope.login.username,
                password: $scope.login.password
            }).success(function (payload, status) {
                //
                var parsed = JSON.parse(JSON.stringify(payload));
                var values = parsed.data.split('|'); // 'data' is the attribute with profile id and auth key
                //
                alert('profileId: ' + values[0] + ' authKey: ' + values[1]);
                //
                // local storage for registered, username, password, profile id, and auth key
                $rootScope.profileId = values[0];
                $rootScope.authKey = values[1];

                //
                $state.go('home');
                //
            }).error(function (data, status) {
                alert('error' + JSON.stringify(status));
                // pop up? show validation error
            });
        }
    }])
    //
    // Home
    //
    .controller('HomeController', ['$scope', '$rootScope', '$state', '$ionicViewService', function ($scope, $rootScope, $state, $ionicViewService) {

        $scope.profile = function () {
            $state.go('profile');
        }
}]);