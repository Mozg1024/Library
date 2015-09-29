(function () {
    'use strict';
    angular.module('app')
        .directive('bookDetailsCard', bookDetailsCard);

        function bookDetailsCard () {
            return {
                 scope: {
                    book: '='
                 },
                 restrict: 'A',
                 templateUrl: 'Partials/directives/book-details-card.html'
            };
        }
}());