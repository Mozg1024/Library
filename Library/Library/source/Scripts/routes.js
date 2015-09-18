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
            	templateUrl: 'Pages/catalog/catalog.html'
            })
            .state('profile', {
            	url: '/profile',
            	templateUrl: 'Pages/profile/profile.html',
            	controller: 'profileCtrl',
            	controllerAs: 'vm'
            })
            .state('faq', {
            	url: '/faq',
            	templateUrl: 'Pages/faq/faq.html',
            	controller: 'faqCtrl',
            	controllerAs: 'vm'
            })
	}
}());