(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl($stateParams, catalogService, threadsService) {
        var vm = this;

        if ($stateParams.search) {
            catalogService.getBySearchString($stateParams.search).then(function (response) {
                vm.books = response.data;
                vm.setActive(1);
            });
        } else {
            catalogService.getAllBooks().then(function (response) {
                vm.books = response.data;
                vm.setActive(1);
            });
        }

        vm.setActive = function (bookId) {
            vm.activeBook = _.find(vm.books, { id: bookId });
        }
    }
}());