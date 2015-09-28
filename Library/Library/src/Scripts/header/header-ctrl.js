(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);

    function headerCtrl($state, usersService, loginService) {
        var vm = this;

        usersService.getUserById(loginService.getUserId()).then(function (response) {
            vm.user = response.data;
        });

        vm.searchCallback = function (value) {
            $state.go('catalog', { search: value });
        }
    }

}());