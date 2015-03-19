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
            createdBy: 'user-1'
        }, {
            content: 'AngularJS',
            createdBy: 'user-1'
        }, {
            content: 'Karma',
            createdBy: 'user-1'
        }, {
            content: 'HTML5 Boilerplate',
            createdBy: 'user-2'
        }, {
            content: 'AngularJS',
            createdBy: 'user-2'
        }, {
            content: 'Karma',
            createdBy: 'user-2'
        }];

        $scope.options = {
            data: logs,
            groupBy: 'createdBy',
            sort: 'content'
        };
    });
