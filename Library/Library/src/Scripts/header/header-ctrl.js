(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);

    function headerCtrl($scope, $state, usersService, loginService) {
        $scope.user = {
            id: loginService.getUserId()
        };

        usersService.getUserById($scope.user.id).then(function (response) {
            $scope.user = response.data;
        });

        $scope.searchCallback = function (value) {
            $state.go('catalog', { search: value });
        }
    }
}());