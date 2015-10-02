(function () {
    'use strict';
    angular.module('app')
        .factory('adminService', adminService);

        function adminService ($http) {
            return {
                approve: function (wishId) {
                    return $http.post('/api/wishes/approve', wishId);
                },
                decline: function (wishId) {
                    return $http.post('/api/wishes/decline', wishId);
                },
                getAllWishes: function () {
                     return $http.get('/api/wishes');
                }
            };
        }
}());