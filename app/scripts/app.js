'use strict';

/**
 * @ngdoc overview
 * @name angularEventviewerApp
 * @description
 * # angularEventviewerApp
 *
 * Main module of the application.
 */
angular
    .module('angularEventviewerApp', [
        'ngRoute',
        'ngSanitize',
        'ngEventViewer'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
