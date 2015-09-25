(function () {
    'use strict';

    angular.module('app')
    .filter('trust', function ($sce) {
        return function (value) {
            return $sce.trustAsResourceUrl(value);
        }
    });
})();