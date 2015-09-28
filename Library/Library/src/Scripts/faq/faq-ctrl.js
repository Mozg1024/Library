(function () {
    'use strict';

    angular.module('app')
        .controller('faqCtrl', faqCtrl);

    function faqCtrl(catalogService, faqService) {
        var vm = this;

        faqService.getAllFaqs().then(function (response) {
            vm.faqs = response.data;
            vm.activeFaq = vm.faqs[0];
        });

        vm.setActive = function (faqId) {
            vm.activeFaq = _.find(vm.faqs, { id: faqId });
        }
    }

}());