var app = angular.module('paharo', ['ionic', 'paharo.controllers', 'paharo.services']);

app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.defaults.withCredentials = true;

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
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })
        .state('pro', {
            url: '/pro',
            templateUrl: 'templates/pro/menu.html',
            controller: 'ProController'
        })
        .state('pro.contact', {
            url: '/contact',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro/contact.html',
                    controller: 'ProController'
                }
            }
        })
        .state('pro.hours', {
            url: '/hours',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro/hours.html',
                    controller: 'ProController'
                }
            }
        })
        .state('pro.certs', {
            url: '/certs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro/certs.html',
                    controller: 'ProController'
                }
            }
        })
        .state('pro.jobs', {
            url: '/jobs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro/jobs.html',
                    controller: 'ProController'
                }
            }
        })
        .state('pro.schools', {
            url: '/schools',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pro/schools.html',
                    controller: 'ProController'
                }
            }
        })
})