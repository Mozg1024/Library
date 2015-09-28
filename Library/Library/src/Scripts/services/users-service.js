(function () {
    'use strict';

    angular.module('app')
        .factory('usersService', usersService);

    function usersService($http) {
        return {
            getUserById: function (id) {
                return $http.get('/api/users/' + id);
            }
        };
    }
}());