(function () {
    'use strict';

    angular.module('app')
        .controller('faqCtrl', faqCtrl);

    function faqCtrl(catalogService) {
        var vm = this;
        vm.getAllBooks = function () {
            catalogService.getAllBooks('/api/catalog').then(function (response) {
                console.log(response.data);
            });
        };
        vm.getAllBooks();
    }

}());