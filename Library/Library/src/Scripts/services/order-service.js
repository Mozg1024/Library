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
            getStatus: function (bookId) {
                return $http.get('/api/order/status/' + bookId);
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