var app = angular.module('paharo', ['ionic', 'paharo.controllers', 'paharo.services']);

app.config(function (/*$httpProvider, */$stateProvider, $urlRouterProvider) {

    //$httpProvider.defaults.withCredentials(true);
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('splash', {
            url: '/',
            templateUrl: 'templates/splash.html',
            controller: 'SplashController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html',
            controller: 'SettingsController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
})