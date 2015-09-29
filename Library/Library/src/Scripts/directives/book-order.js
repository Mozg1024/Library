﻿(function () {
    'use strict';
    angular.module('app')
        .directive('bookOrder', bookOrder);
        function bookOrder(catalogService) {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'Partials/directives/book-order.html',
                scope: {
                    bookId: '@',
                },
                link: function (scope, element, attrs) {

                    var orderSwitch = $('#orderSwitch');

                    element.on('click', function () {
                        /*if(orderSwitch.bootstrapSwitch('state')) {
                            catalogService.cancelBook(scope.bookId).then(function (response) {

                            });
                        } else {
                            catalogService.orderBook(scope.bookId).then(function (response) {

                            });
                        }*/
                    });
                }
            };
        }
}());