(function () {
    'use strict';
    angular.module('app')
        .factory('catalogService', catalogService);
    function catalogService($http) {
        return {
            getAllBooks: function () {
                return $http.get('/api/catalog');
            }
        };
    }
}());