(function () {
    'use strict';

    angular.module('app')
        .factory('catalogService', catalogService);

    function catalogService($http) {
        return {

            getAllBooks: function () {
                return $http.get('/api/catalog');
            },
            getBySearchString: function (searchString) {
                return $http.post('/api/catalog/filtered', searchString);
                
            },
            getBook: function (id) {
                return $http.get('/api/catalog/' + id);
            },
            orderBook: function (bookId) {
                return $http.post('/api/order/', bookId);
            },
            cancelBook: function (orderId) {
                return $http.post('/api/order/cancel', orderId);
            },
            rateBook: function (bookId, bookRating) {
                return $http.post('/api/ratebook', { id: bookId, rating: bookRating});
            }

        };
    }
}());