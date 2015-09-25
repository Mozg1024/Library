(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);

    function headerCtrl($state) {
        var vm = this;

        vm.user = {
            name: 'Dmitry Vereskun',
            avatar: 'images/users/Dmitry_Vereskun.jpg'
        };

        vm.searchCallback = function (value) {
            $state.go('catalog', {search: value});
            console.log(value);
        }
    }

}());