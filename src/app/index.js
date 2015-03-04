'use strict';

angular.module('ryanair', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angucomplete-alt', 'angular-datepicker'])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            template: '<searcher></seacher>'
        });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
