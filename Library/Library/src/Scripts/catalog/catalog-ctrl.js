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



        //vm.comments = [
        //    {
        //        user: {
        //            avatar: 'images/users/Aleksei_Prokofev.jpg',
        //            name: 'Alexey Prokofiev'
        //        },
        //        date: new Date(2015, 2, 12, 9, 45),
        //        lines: [
        //            'Interesting tamada.',
        //            'Contests also interesting.'
        //        ]
        //    },
        //    {
        //        user: {
        //            avatar: 'images/users/Rustam_Mamedov.jpg',
        //            name: 'Rustam Mamedov'
        //        },
        //        date: new Date(2015, 5, 17, 13, 1),
        //        lines: [
        //            'I am sick of this book.',
        //            '(((((((((((('
        //        ]
        //    }
        //];

        vm.setActive = function (bookId) {
            vm.activeBook = _.find(vm.books, { id: bookId });

            threadsService.getThreadById(vm.activeBook.threadId).then(function (response) {
                vm.comments = response.data.comments;
            });
        }
    }
}());