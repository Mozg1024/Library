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
            order: function (bookId, userId) {
                return $http.post('/api/order', { book: bookId, user: userId });
            },
            refuse: function (bookId, userId) {
                return $http.post('/api/refuse', { book: bookId, user: userId });
            }

        };
    }
}());