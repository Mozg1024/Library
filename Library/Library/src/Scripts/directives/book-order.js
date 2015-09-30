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

                scope.$on('$destroy', scope.$watch('bookId', function () {
                    orderService.getStatus(scope.bookId).then(function (response) {
                        element.bootstrapSwitch('state', false);
                    }, function () {
                        element.bootstrapSwitch('state', true);
                    });
                }));


                //var orderSwitch = $('#orderSwitch');

                //element.on('click', function () {

                //    if (!orderSwitch.bootstrapSwitch('state')) {

                //        orderService.orderBook(scope.bookId).then(function (response) {
                //            scope.orderId = response.data;
                //        });
                //    } else {

                //        orderService.cancelBook(scope.orderId).then(function (response) {
                //            console.log(response.data);
                //        }, function (response) {
                //            console.log(response.status);
                //        });
                //    }
                //});
            }
        };
    });
}());