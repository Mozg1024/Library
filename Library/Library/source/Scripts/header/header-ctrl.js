(function () {
    'use strict';

    angular.module('app')
        .controller('headerCtrl', headerCtrl);
    function headerCtrl() {
        var vm = this;
        vm.username = 'guest';
    }

}());