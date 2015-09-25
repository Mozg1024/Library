(function () {
    'use strict';

    angular.module('app')
    .directive("searchInput", function () {
        return {
            restrict: "A",
            scope: {
                callback: '&'
            },
            templateUrl: 'Partials/directives/search-input.html',
            link: function (scope) {
                scope.submit = function () {
                    scope.callback({value: scope.value});
                }
            }
        };
    });
}());