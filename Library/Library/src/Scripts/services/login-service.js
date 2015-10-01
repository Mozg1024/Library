(function () {
    'use strict';

    angular.module('app')
        .factory('loginService', loginService);

    function loginService($cookies, $http) {
        return {
            getUserId: function () {
                var userId = $cookies.get('userId');

                if (!userId) {
                    userId = 4001;
                    $cookies.put('userId', userId)
                }

                return userId;
            },
            getUserById: function (id) {
                return $http.get('/api/users/' + id);
            }
        };
    }
}());