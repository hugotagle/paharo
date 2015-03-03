var app = angular.module('paharo', ['ionic']);

app.controller('SplashController', ['$scope', '$state', SplashController]);

function SplashController($scope, $state) {
    $scope.register = function () {
        $state.go('register');
    }
    $scope.login = function () {
        $state.go('login');
    }
}

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider

        .state('splash', {
            url: '/',
            templateUrl: 'templates/splash.html',
            controller: 'SplashController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
})