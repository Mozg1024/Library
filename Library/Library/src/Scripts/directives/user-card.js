(function () {
    'use strict';

    angular.module('app')
    .directive("userCard", function (usersService) {
        return {
            restrict: "A",
            scope: {
                userCard: '@'
            },
            templateUrl: 'Partials/directives/user-card.html',
            replace: true,
            link: function (scope) {
                usersService.getUserById(scope.userCard).then(function (response) {
                    scope.user = response.data;
                });
            }
        };
    });
}());