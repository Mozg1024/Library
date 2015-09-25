(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl($stateParams, catalogService) {
        var vm = this;

        catalogService.getAllBooks().then(function (response) {
            vm.books = response.data;
            vm.activeBook = vm.books[0];
        });

        vm.comments = [
            {
                user: {
                    avatar: 'images/users/Aleksei_Prokofev.jpg',
                    name: 'Alexey Prokofiev'
                },
                date: new Date(2015, 2, 12, 9, 45),
                lines: [
                    'Interesting tamada.',
                    'Contests also interesting.'
                ]
            },
            {
                user: {
                    avatar: 'images/users/Rustam_Mamedov.jpg',
                    name: 'Rustam Mamedov'
                },
                date: new Date(2015, 5, 17, 13, 1),
                lines: [
                    'I am sick of this book.',
                    '(((((((((((('
                ]
            }
        ];

        vm.setActive = function (bookId) {
            vm.activeBook = vm.books[_.findIndex(vm.books, {id: bookId})];
        }
    }
}());