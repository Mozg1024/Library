(function () {
    'use strict';

    angular.module('app')
    .directive("searchInput", function () {
        return {
            restrict: "A",
            scope: {
                searchInput: '&'
            },
            templateUrl: 'Partials/directives/search-input.html',
            replace: true,
            link: function (scope) {
                scope.submit = function () {
                    var val = scope.value;

                    scope.value = '';
                    scope.searchInput({ value: val });
                }
            }
        };
    });
}());