(function () {
    'use strict';

    angular.module('app')
        .factory('orderService', orderService);

    function orderService($http) {
        return {
            getOrderedBooks: function () {
                return $http.get('/api/ordered/books');
            },
            getWantedBooks: function () {
                return $http.get('/api/wanted/books');
            },
            orderBook: function (bookId) {
                return $http.post('/api/order/', bookId);
            },
            cancelBook: function (orderId) {
                return $http.post('/api/order/cancel', orderId);
            }
        };
    }
}());