'use strict';

angular.module('ngEventViewer', [])
    .directive('eventViewer', function() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/eventViewer.html',
            scope: {
                options: '='
            },
            link: function(scope, element, attrs) {
                scope.logs = scope.options.data;
            }
        };
    });
