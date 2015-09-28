(function () {
    'use strict';
    angular.module('app')
        .run(fakeBack);
        function fakeBack($httpBackend) {

            var faqs = [
                {
                    id: 1,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: 'https://www.youtube.com/embed/_VGGxEpgWNw',
                    threadId: 1000 
                },
                {
                    id: 2,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: 'https://www.youtube.com/embed/_VGGxEpgWNw',
                    threadId: 1001
                },
                {
                    id: 3,
                    question: 'How to do everything in the word?',
                    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aspernatur consequatur dolores explicabo laboriosam nulla tempora, culpa repellat esse quo labore error hic perspiciatis soluta modi inventore',
                    link: '',
                    threadId: 1002
                },
            ];

            $httpBackend.whenGET('/api/faqs').respond(200, faqs, {});

        }
}());