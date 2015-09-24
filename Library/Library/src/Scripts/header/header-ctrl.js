(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);

    function headerCtrl() {
        var vm = this;

        vm.user = {
            name: 'Dmitry Vereskun',
            avatar: 'images/users/Dmitry_Vereskun.jpg'
        };
    }

}());