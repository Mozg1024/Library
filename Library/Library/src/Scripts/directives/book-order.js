(function () {
    'use strict';

    angular.module('app')
    .directive('bookOrder', function (orderService) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Partials/directives/book-order.html',
            scope: {
                bookId: '@'
            },
            link: function (scope, element) {
                element.bootstrapSwitch();

                element.on('switchChange.bootstrapSwitch', function (event, state) {
                    if (state) {
                        orderService.cancelBook(scope.bookId);
                    } else {
                        orderService.orderBook(scope.bookId);
                    }
                });

                scope.$on('$destroy', scope.$watch('bookId', function () {
                    orderService.getStatus(scope.bookId).then(function (response) {
                        element.bootstrapSwitch('state', false, true);
                        if (response.data === 'order') {
                            element.bootstrapSwitch('disabled', true);
                        } else {
                            element.bootstrapSwitch('disabled', false);
                        }
                    }, function () {
                        element.bootstrapSwitch('disabled', false);
                        element.bootstrapSwitch('state', true, true);
                    });
                }));
            }
        };
    });
}());