'use strict';

angular.module('axEventViewerFilter', [])
    .filter('groupBy', function() {
        console.log('groupBy filter');

        function groupBy(items, key) {
            var itemsCopy = _.slice(items);
            var newItems = _.groupBy(itemsCopy, function(n) {
                return n[key];
            });
            return newItems;
        };
        return groupBy;
    });

angular.module('axEventViewer', ['axEventViewerFilter'])
    .directive('eventViewer', ['groupByFilter', function(groupBy) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/eventViewer.html',
            scope: {
                options: '='
            },
            link: function(scope, element, attrs) {
                console.log('link');
                var groupBy = scope.options.groupBy;
                if (groupBy) {
                    scope.logs = _.groupBy(scope.options.data, function(n) {
                        return n[groupBy];
                    });
                }
                console.log(scope.logs);
            }
        };
    }]);
