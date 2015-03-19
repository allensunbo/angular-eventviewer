'use strict';

// obsolete filter! Do NOT use!!
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


angular.module('axEventViewer', [])
    .directive('eventViewer', ['uiGridGroupingConstants', function(uiGridGroupingConstants) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/eventViewer.html',
            scope: {
                options: '='
            },
            controller: function($scope) {
                $scope.groupBy = function(key) {
                    var scope = $scope;
                    var groupingObj = {
                        grouping: [],
                        aggregations: []
                    };

                    for (var i = 0; i < scope.gridOptions.columnDefs.length; i++) {
                        if (scope.gridOptions.columnDefs[i].name === key) {
                            groupingObj.grouping.push({
                                colName: key,
                                field: key,
                                groupPriority: 0
                            });
                        } else {

                        }
                    }

                    if (key === 'severity') {
                        scope.gridOptions = {
                            //  enableFiltering: true,
                            columnDefs: [{
                                name: 'severity',
                                grouping: {
                                    groupPriority: 0
                                        // aggregation: uiGridGroupingConstants.aggregation.MAX
                                },
                                width: '20%'
                            }, {
                                name: 'content',
                                width: '50%'
                            }, {
                                name: 'createdBy',
                                grouping: {
                                    // groupPriority: 1
                                },
                                sort: {
                                    direction: 'asc'
                                },
                                width: '20%'
                            }],
                            onRegisterApi: function(gridApi) {
                                scope.gridApi = gridApi;
                            }
                        };
                    } else {
                        scope.gridOptions = {
                            //  enableFiltering: true,
                            columnDefs: [{
                                name: 'content',
                                width: '50%'
                            }, {
                                name: 'createdBy',
                                grouping: {
                                    // groupPriority: 0
                                },
                                sort: {
                                    direction: 'asc'
                                },
                                width: '20%'
                            }, {
                                name: 'severity',
                                grouping: {
                                    // aggregation: uiGridGroupingConstants.aggregation.MAX
                                },
                                width: '20%'
                            }],
                            onRegisterApi: function(gridApi) {
                                scope.gridApi = gridApi;
                            }
                        };
                    }

                    scope.gridApi.grouping.setGrouping(groupingObj);
                    console.log(groupingObj);
                    console.log(scope.gridApi.grouping.getGrouping());
                }
            },
            link: function(scope, element, attrs) {
                console.log('link');
                var groupBy = scope.options.groupBy;
                scope.logs = scope.options.data;
                console.log(scope.logs);

                scope.gridOptions = {
                    //  enableFiltering: true,
                    columnDefs: [{
                        name: 'content',
                        width: '50%'
                    }, {
                        name: 'createdBy',
                        grouping: {
                            // groupPriority: 1
                        },
                        sort: {
                            direction: 'asc'
                        },
                        width: '20%'
                    }, {
                        name: 'severity',
                        grouping: {
                            // aggregation: uiGridGroupingConstants.aggregation.MAX
                        },
                        width: '20%'
                    }],
                    onRegisterApi: function(gridApi) {
                        scope.gridApi = gridApi;
                    }
                };

                scope.gridOptions.data = scope.logs;

            }
        };
    }]);
