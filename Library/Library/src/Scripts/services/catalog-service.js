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
            rateBook: function (bookId, bookRating) {
                return $http.post('/api/ratebook', { id: bookId, rating: bookRating});
            }
        };
    }
}());