(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl($state, $stateParams, catalogService, threadsService) {
        var vm = this;

        if ($stateParams.search) {
            catalogService.getBySearchString($stateParams.search).then(function (response) {
                vm.books = response.data;
                if (vm.books.length) {
                    vm.setActive(vm.books[0].id);
                } else {
                    $state.go('404');
                }
            });
        } else {
            catalogService.getAllBooks().then(function (response) {
                vm.books = response.data;
                vm.setActive(vm.books[0].id);
            });
        }

        vm.setActive = function (bookId) {
            vm.activeBook = _.find(vm.books, { id: bookId });
        }

        vm.isActive = function (bookId) {
            if (vm.activeBook.id === bookId) {
                return 'active';
            }
        }
    }
}());