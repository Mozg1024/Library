(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl($state, $stateParams, catalogService, threadsService) {
        var vm = this;
        vm.panelSize = 300;

        if ($stateParams.search) {
            catalogService.getBySearchString($stateParams.search).then(function (response) {
                vm.books = response.data;
                if (vm.books.length) {
                    vm.setActive(vm.books[0].id);

                    vm.grad = 0;
                    vm.tz = Math.round((vm.panelSize / 2) / Math.tan(Math.PI / vm.books.length));
                } else {
                    $state.go('404');
                }
            });
        } else {
            catalogService.getAllBooks().then(function (response) {
                vm.books = response.data;
                if (vm.books.length) {
                    vm.setActive(vm.books[0].id);

                    vm.grad = 0;
                    vm.tz = Math.round((vm.panelSize / 2) / Math.tan(Math.PI / vm.books.length));
                } else {
                    $state.go('404');
                }
            });
        }




        $('#book-carousel').on('wheel', function (e) {
            if (e.originalEvent.deltaY > 0) {
                vm.grad += (360 / vm.books.length);
            } else {
                vm.grad -= (360 / vm.books.length);
            }

            $(this).css({ transform: 'rotateX(' + vm.grad + 'deg)' });
        });

        vm.style = function (index, count) {
            var grad = (360 / count) * index;

            return { transform: 'rotateX( ' + grad + 'deg ) translateZ( ' + vm.tz + 'px )' };
        }

        vm.rotate = function () {
            return { transform: 'rotateX( ' + vm.grad + 'deg ) translateZ( -' + vm.tz + 'px )' };
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