(function () {
    'use strict';

    angular.module('app')
        .factory('loginService', loginService);

    function loginService($cookies) {
        return {
            getUserId: function () {
                var userId = $cookies.get('userId');

                if (!userId) {
                    userId = 4001;
                    $cookies.put('userId', userId)
                }

                return userId;
            }
        };
    }
}());