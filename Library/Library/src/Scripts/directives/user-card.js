(function () {
    'use strict';

    angular.module('app')
    .directive("userCard", function (usersService) {
        return {
            restrict: "A",
            scope: {
                userId: '@'
            },
            templateUrl: 'Partials/directives/user-card.html',
            replace: true,
            link: function (scope) {
                usersService.getUserById(scope.userId).then(function (response) {
                    scope.user = response.data;
                });
            }
        };
    });
}());