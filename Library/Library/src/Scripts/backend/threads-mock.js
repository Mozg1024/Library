(function () {
    'use strict';

    angular.module('app')
        .run(fakeThreadsBackend);

    function fakeThreadsBackend($httpBackend, loginService) {

        var threads = [
            {
                id: 2001,
                comments: [
                    {
                        userId: 4002,
                        text: 'Interesting tamada. \n Contests also interesting.',
                        date: new Date(2015, 2, 12, 9, 45)
                    },
                    {
                        userId: 4003,
                        text: 'I am sick of this book. \n ((((((((((((',
                        date: new Date(2015, 5, 17, 13, 1)
                    }
                ]
            },
            {
                id: 2002,
                comments: [
                    {
                        userId: 4004,
                        text: 'I didn\'t get it. \n (((((((',
                        date: new Date(2014, 8, 14, 2, 6)
                    }
                ]
            }
        ];

        $httpBackend.whenGET(/^\/api\/threads\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
                threadId = +url.match(regexp),
                thread = _.find(threads, { id: threadId });

            if (thread) {
                return [200, thread, {}];
            }

            return [404];
        });

        $httpBackend.whenPOST(/^\/api\/threads\/[0-9]+$/).respond(function (method, url, data) {
            var regexp = /[0-9]+$/,
                threadId = +url.match(regexp),
                thread = _.find(threads, { id: threadId }),
                comment = {
                    userId: loginService.getUserId(),
                    text: data,
                    date: new Date()
                };

            if (thread) {
                thread.comments.push(comment);
            } else {
                threads.push({
                    id: threadId,
                    comments: [comment]
                });
            }

            return [200];
        });
    }
}());