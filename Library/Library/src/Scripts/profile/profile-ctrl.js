(function () {
    'use strict';

    angular.module('app')
        .controller('profileCtrl', profileCtrl);

    function profileCtrl($scope, catalogService, orderService) {
        var vm = this;
        
        vm.state = 'orders';

        orderService.getOrderedBooks().then(function (response) {
            vm.orderedBooks = response.data;
            $scope.activeList = vm.orderedBooks;
        }, function () {
            vm.orderedBooks = [];
            $scope.activeList = vm.orderedBooks;
        });

        orderService.getWantedBooks().then(function (response) {
            vm.wantedBooks = response.data;
        }, function () {
            vm.wantedBooks = [];
        });

        vm.setActive = function (param) {
            vm.state = param.state;
            $scope.activeList = (vm.state === 'orders') ? vm.orderedBooks : vm.wantedBooks;
        }

        vm.isActive = function (param) {
            if (vm.state === param.state) {
                return 'active';
            }
        }
    };

}());