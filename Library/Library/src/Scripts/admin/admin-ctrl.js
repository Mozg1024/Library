(function () {
    'use strict';
    angular.module('app')
        .controller('adminCtrl', adminCtrl);

        function adminCtrl (adminService) {
            var vm = this;

            adminService.getAllWishes().then(function (response) {
                vm.wishes = response.data;
                console.log(vm.wishes);
            });
        }
}());