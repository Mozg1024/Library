(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);

    function headerCtrl($scope, $state, usersService, loginService) {
        //var vm = this;

        //vm.userId = loginService.getUserId();

        usersService.getUserById(loginService.getUserId()).then(function (response) {
            $scope.user = response.data;
        });

        $scope.searchCallback = function (value) {
            $state.go('catalog', { search: value });
        }
    }
}());