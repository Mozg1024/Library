(function () {
    'use strict';

    angular.module('app')
        .run(fakeBack);

    function fakeBack($httpBackend) {
    
        var books = [
            {
                bookId: 1,
                typeId: 2,
                icon: 'images/books/rikhter.jpg',
                title: 'Some book',
                description: 'Description',
                authors: [
                    'First Author',
                    'Second Author'
                ],
                pageCount: 666,
                rate: 4,
                year: 2015,
                isAvaliable: true
            },
            {
                bookId: 235,
                typeId: 5,
                icon: 'images/books/rikhter.jpg',
                title: 'Some book',
                description: 'Description',
                authors: [
                    'First Author',
                    'Second Author'
                ],
                pageCount: 666,
                rate: 4,
                year: 2015,
                isAvaliable: true
            },
            {
                bookId: 235,
                cover: 'images/books/rikhter.jpg',
                title: 'Some book',
                description: 'Description',
                authors: [
                    'First Author',
                    'Second Author'
                ],
                pages: 666,
                rating: 4,
                year: 2015,
                available: 3,
                count: 5
            }
        ];

        $httpBackend.whenGET('/api/catalog').respond(200, books, {});

        $httpBackend.whenGET(/^\/api\/catalog\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
			bookId = +url.match(regexp);
            for (var i = 0; i < books.length; i++) {
                if (books[i].id === bookId) {
                    return [200, books[i], {}];
                }
            }
        });

        $httpBackend.whenGET(/.*/).passThrough();
    }
}());