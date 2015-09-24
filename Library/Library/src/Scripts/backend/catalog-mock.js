(function () {
    'use strict';

    angular.module('app')
        .run(fakeBack);

    function fakeBack($httpBackend) {
    
        var books = [
            {
                bookId: 1,
                typeId: 2,
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
                typeId: 2,
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
            }
        ];

        $httpBackend.whenGET('/api/catalog').respond(200, books, {});
        $httpBackend.whenGET(/.*/).passThrough();
    }
}());