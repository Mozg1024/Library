(function () {
    'use strict';

    angular.module('app')
        .controller('profileCtrl', profileCtrl);

    function profileCtrl(catalogService) {
        var vm = this;
        
        catalogService.getAllBooks().then(function (response) {
            vm.books = response.data;
        });
    };

}());