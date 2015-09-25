(function () {
    'use strict';

    angular.module('app')
        .controller('faqCtrl', faqCtrl);

    function faqCtrl(catalogService) {
        var vm = this;

        vm.faqs = [
            {
                id: 1,
                question: 'How to do everything in the world?',
                answer: 'Velit mollis odio sollicitudin lacinia aliquam posuere, sapien elementum lobortis tincidunt, turpis dui ornare nisl, sollicitudin interdum turpis nunc eget sem nulla eu ultricies orci praesent id augue nec lorem pretium congue sit amet ac nunc fusce iaculis lorem eu diam hendrerit at mattis purus dignissim vivamus mauris tellus, fringilla vel dapibus a, blandit quis erat vivamus elementum aliquam luctus etiam fringilla pretium sem vitae sodales mauris id nulla est praesent laoreet, metus vel auctor aliquam, eros purus vulputate leo, eget consequat neque quam id tellus duis ultricies tempor tortor, vitae dignissim ligula mattis nec in hac habitasse platea dictumst.',
                link: 'https://www.youtube.com/embed/_VGGxEpgWNw',
                commentCount: 2
            }
        ];

        vm.comments = [
            {
                user: {
                    avatar: 'images/users/Vladimir_Levin.jpg',
                    name: 'Vladimir Levin'
                },
                date: new Date(2014, 8, 14, 2, 6),
                lines: [
                    'I didn\'t get it.',
                    '((((((('
                ]
            }
        ];
    }

}());