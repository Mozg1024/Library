(function () {
    'use strict';

    angular.module('app')
        .factory('threadsService', threadsService);

    function threadsService($http) {
        return {
            getThreadById: function (id) {
                return $http.get('/api/threads/' + id);
            },
            getCommentsCount: function (id) {
                return $http.get('/api/threads/count/' + id);
            },
            addCommentToThread: function (id, comment) {
                return $http.post('/api/threads/' + id, comment)
            }
        };
    }
}());