(function () {
    'use strict';
    angular.module('app')
        .factory('adminService', adminService);

        function adminService ($http) {
            return {
                approve: function (wish) {
                    return $http.post('/api/wishes/approve', wish);
                },
                decline: function (wish) {
                    return $http.post('/api/wishes/decline', wish);
                },
                getAllWishes: function () {
                     return $http.get('/api/wishes');
                }
            };
        }
}());