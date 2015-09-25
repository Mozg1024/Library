(function () {
    'use strict';
    angular.module('app')
        .factory('catalogService', catalogService);
    function catalogService($http) {
        var books = [];
        return {
            getAllBooks: function () {
                return $http.get('/api/catalog');
            },
            getBook: function (id) {
                return $http.get('/api/catalog/' + id);
            }
        };
    }
}());