(function () {
    'use strict';

    angular.module('app')
        .factory('threadsService', threadsService);

    function threadsService($http) {
        return {
            getThreadById: function (id) {
                return $http.get('/api/threads/' + id);
            }
        };
    }
}());