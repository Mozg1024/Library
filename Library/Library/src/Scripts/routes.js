(function () {
    'use strict';

    angular.module('app')
        .config(routes);

    function routes($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('catalog', {
                url: '/',
                controller: 'catalogCtrl',
                controllerAs: 'vm',
                templateUrl: 'Partials/catalog/catalog.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'Partials/profile/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            })
            .state('faq', {
                url: '/faq',
                templateUrl: 'Partials/faq/faq.html',
                controller: 'faqCtrl',
                controllerAs: 'vm'
            })
    }

}());