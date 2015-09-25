(function () {
    'use strict';

    angular.module('app')
        .controller('profileCtrl', profileCtrl);

    function profileCtrl(catalogService) {
        var vm = this;

        vm.booksHave = {
            count: 10
        };

        vm.booksWant = {
            count: 5
        };
        
        catalogService.getAllBooks().then(function (response) {
            vm.books = response.data;
        });
    };

}());