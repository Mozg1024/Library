(function () {
    'use strict';
    angular.module('app')
        .factory('faqService', faqService);
        function faqService($http) {
            return {

                getAllFaqs: function () {
                    return $http.get('/api/faqs');
                    
                }
            };
        }
}());