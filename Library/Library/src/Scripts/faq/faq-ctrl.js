(function () {
    'use strict';

    angular.module('app')
        .controller('faqCtrl', faqCtrl);

    function faqCtrl(faqService, threadsService) {
        var vm = this;

        faqService.getAllFaqs().then(function (response) {
            vm.faqs = response.data;
            vm.setActive(vm.faqs[0].id);
            angular.forEach(vm.faqs, function (faq) {
                threadsService.getCommentsCount(faq.threadId).then(function (response) {
                    faq.commentCount = response.data;
                });
            });
        });

        vm.setActive = function (faqId) {
            vm.activeFaq = _.find(vm.faqs, { id: faqId });
        }

        vm.isActive = function (faqId) {
            if (vm.activeFaq.id === faqId) {
                return 'active';
            }
        }
    }

}());