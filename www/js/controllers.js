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
        $scope.settings = function () {
            $state.go('settings');
        }
    }])
    .controller('LoginController', ['$scope', '$rootScope', 'GlobalPC', '$state', '$ionicViewService', function ($scope, $rootScope, GlobalPC, $state, $ionicViewService) {

        $scope.params = {
            username: 'hugo.tagle@gmail.com',
            password: 'Password1!'
        };

        $scope.login = function () {

            //alert('username: ' + $scope.login.username + ', password: ' + $scope.login.password);

            GlobalPC.authenticate({
                username: $scope.params.username,
                password: $scope.params.password
            }).success(function (payload, status) {
                //
                var parsed = JSON.parse(JSON.stringify(payload));
                var values = parsed.data.split('|'); // 'data' is the attribute with profile id and auth key
                //
                //alert('profileId: ' + values[0] + ' authKey: ' + values[1]);
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
    .controller('HomeController', ['$scope', '$rootScope', 'GlobalPC', '$state', '$ionicViewService', function ($scope, $rootScope, GlobalPC, $state, $ionicViewService) {

        $scope.goProfile = function () {

            //alert('authKey: ' + $rootScope.authKey);

            GlobalPC.getProfile({
                    authKey: $rootScope.authKey
                })
                .success(function (payload, status) {
                    //
                    //alert(status + ':' + payload);
                    var parsed = JSON.parse(JSON.stringify(payload));
                    $rootScope.p = parsed;

                    //alert(''+$rootScope.summary);
                    //var values = parsed.data.split('|'); // 'data' is the attribute with profile id and auth key
                    //alert(parsed);
                    //
                    $state.go('pro.contact');
                    //$state.go('profile');
                    //
                }).error(function (data, status) {
                    alert('error' + JSON.stringify(data));
                    // pop up? show validation error
                });

        }
        $scope.settings = function () {
            alert('Will show Settings screen');
        }
    }])
    .controller('ProfileController', ['$scope', '$rootScope', '$state', '$ionicViewService', function ($scope, $rootScope, $state, $ionicViewService) {

        $scope.params = {};
        //$scope.params.summary = 'Summary:  ' + $rootScope.summary; // get host from local storage

    }])
    .controller('SettingsController', ['$scope', '$state', '$ionicViewService', function ($scope, $state, $ionicViewService) {

        $scope.params = {};
        $scope.params.host = window.localStorage.getItem('host'); // get host from local storage

        $scope.submit = function () {

            window.localStorage.setItem('host', $scope.params.host); // set host in local storage 

            $state.go('splash'); // this is just for development; changing host is just for development.
        }

    }])
    .controller('ProController', ['$scope', '$rootScope', '$state', '$ionicViewService', function ($scope, $rootScope, $state, $ionicViewService) {

        $scope.p = $rootScope.p;

    }]);