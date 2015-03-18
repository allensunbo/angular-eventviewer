'use strict';

/**
 * @ngdoc function
 * @name angularEventviewerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularEventviewerApp
 */
angular.module('angularEventviewerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
