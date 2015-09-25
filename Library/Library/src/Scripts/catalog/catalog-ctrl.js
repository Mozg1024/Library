(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl(catalogService) {
        var vm = this;

        catalogService.getBook(1).then(function (response) {
            vm.book = response.data;
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
    }
}());