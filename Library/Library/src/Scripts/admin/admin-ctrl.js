(function () {
    'use strict';
    angular.module('app')
        .controller('adminCtrl', adminCtrl);

        function adminCtrl ($scope, adminService, catalogService, loginService) {

            $scope.isActive = function (wishId) {

                if($scope.activeWish) {
                    if ($scope.activeWish.id === wishId) {
                        return 'active';
                    }
                }
            }
            $scope.accept = function () {
                adminService.approve($scope.activeWish.id).then(function (response) {

                   $scope.getAllWishes();
                }, function (response) {

                });
            };

            $scope.decline = function () {
                adminService.decline($scope.activeWish.id).then(function (response) {
                    $scope.getAllWishes();
                });
            };
            $scope.setActive = function (wishId) {

                $scope.activeWish = _.find($scope.wishes, { id: wishId });
            };
            $scope.getAllWishes = function (wishId) {

                adminService.getAllWishes().then(function (response) {
                    $scope.wishes = response.data;
                    $scope.setActive($scope.wishes[0].id);
                });
            };
            $scope.getAllWishes();

        }
}());