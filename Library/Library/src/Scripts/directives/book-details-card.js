(function () {
    'use strict';

    angular.module('app')
    .directive('bookDetailsCard', function () {
        return {
            scope: {
                book: '='
            },
            restrict: 'A',
            templateUrl: 'Partials/directives/book-details-card.html'
        };
    });
}());