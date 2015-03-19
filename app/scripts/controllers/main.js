'use strict';

/**
 * @ngdoc function
 * @name angularEventviewerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularEventviewerApp
 */
angular.module('angularEventviewerApp')
    .controller('MainCtrl', function($scope) {
        var logs = [{
            content: 'HTML5 Boilerplate',
            createdBy: 'user-1',
            severity: 'debug'
        }, {
            content: 'AngularJS',
            createdBy: 'user-1',
            severity: 'info'
        }, {
            content: 'Karma',
            createdBy: 'user-1',
            severity: 'debug'
        }, {
            content: 'HTML5 Boilerplate',
            createdBy: 'user-2',
            severity: 'info'
        }, {
            content: 'AngularJS',
            createdBy: 'user-2',
            severity: 'warn'
        }, {
            content: 'Karma',
            createdBy: 'user-2',
            severity: 'info'
        }];

        $scope.options = {
            data: logs,
            groupBy: 'createdBy',
            sort: 'content'
        };
    });
