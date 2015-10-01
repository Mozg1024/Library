(function () {
    'use strict';
    angular.module('app')
        .controller('adminCtrl', adminCtrl);

        function adminCtrl (adminService, catalogService, loginService) {
            var vm = this;

            adminService.getAllWishes().then(function (response) {

                vm.wishes = response.data;
                vm.setActive(vm.wishes[0].id);
            });

            vm.isActive = function (wish) {

                if(vm.activeWish) {
                    if (vm.activeWish.id === wish.id) {
                        return 'active';
                    }
                }
            }

            vm.setActive = function (wish) {

                vm.activeWish = _.find(vm.wishes, { id: wish.id });
            }

        }
}());