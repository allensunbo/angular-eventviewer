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
        'ngAnimate',
        'ngTouch',
        'ngRoute',
        'ngSanitize',
        'ui.grid',
        'ui.grid.grouping',
        'ui.grid.pinning',
        'axEventViewer'
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
