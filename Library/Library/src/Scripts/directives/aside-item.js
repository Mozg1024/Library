(function () {
    'use strict';

    angular.module('app')
    .directive("asideItem", function () {
        return {
            restrict: "A",
            scope: {
                asideItem: '='
            },
            templateUrl: 'Partials/directives/aside-item.html',
            replace: true,
        };
    });
}());