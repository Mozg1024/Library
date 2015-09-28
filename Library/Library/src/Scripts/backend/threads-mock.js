(function () {
    'use strict';

    angular.module('app')
        .run(fakeThreadsBackend);

    function fakeThreadsBackend($httpBackend) {

        var threads = [
            {
                id: 2001,
                comments: [
                    {
                        id: 3001,
                        userId: 4002,
                        text: 'Interesting tamada. \n Contests also interesting.',
                        date: new Date(2015, 2, 12, 9, 45)
                    },
                    {
                        id: 3002,
                        userId: 4003,
                        text: 'I am sick of this book. \n ((((((((((((',
                        date: new Date(2015, 5, 17, 13, 1)
                    },
                    {
                        id: 3003,
                        userId: 4003,
                        text: 'I am sick of this book. \n ((((((((((((',
                        date: new Date(2015, 5, 17, 13, 1)
                    },
                    {
                        id: 3004,
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
                        id: 3003,
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
                thread = _.find(threads, { id: threadId })

            if (thread) {
                return [200, thread, {}];
            }
            return [404];
        });
        $httpBackend.whenGET(/^\/api\/threads\/count\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
                threadId = +url.match(regexp),
                thread = _.find(threads, { id: threadId })

            if (thread) {
                return [200, thread.comments.length, {}];
            }
            return [404];
        });
    }
}());