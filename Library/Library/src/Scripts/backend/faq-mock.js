(function () {
    'use strict';
    angular.module('app')
        .run(fakeBack);
        function fakeBack($httpBackend) {

            var faqs = [
                {
                    id: 1000,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: 'https://www.youtube.com/embed/_VGGxEpgWNw',
                    threadId: 2001 
                },
                {
                    id: 1001,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: 'https://www.youtube.com/embed/_VGGxEpgWNw',
                    threadId: 2002
                },
                {
                    id: 1002,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: '',
                    threadId: 2003
                },
            ];

            $httpBackend.whenGET('/api/faqs').respond(200, faqs, {});

            $httpBackend.whenGET(/^\/api\/faqs\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
                faqId = +url.match(regexp);

            for (var i = 0; i < faqs.length; i++) {
                if (faqs[i].id === faqId) {
                    return [200, faqs[i], {}];
                }
            }
        });

        }
}());