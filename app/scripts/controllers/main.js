'use strict';

/**
 * @ngdoc function
 * @name angularEventviewerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularEventviewerApp
 */
angular.module('angularEventviewerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
