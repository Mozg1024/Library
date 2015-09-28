(function () {
    'use strict';

    angular.module('app')
        .controller('faqCtrl', faqCtrl);

    function faqCtrl(catalogService, faqService, threadsService) {
        var vm = this;
        vm.currentCommentsCount = 0;

        faqService.getAllFaqs().then(function (response) {
            vm.faqs = response.data;
            vm.activeFaq = vm.faqs[0];
                angular.forEach(vm.faqs, function (faq) {
                    threadsService.getCommentsCount(faq.threadId).then(function (response) {
                    faq.commentCount = response.data;
                });
            });
        });
        vm.setActive = function (faqId) {
            vm.activeFaq = _.find(vm.faqs, { id: faqId });
            threadsService.getThreadById(vm.activeFaq.threadId).then(function (response) {
                vm.comments = response.data.comments;
            });
        }
        vm.getCommentsCount = function (threadId) {
           
        };
    }

}());