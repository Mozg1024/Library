﻿(function () {
    'use strict';

    angular.module('app')
        .run(fakeBack);

    function fakeBack($httpBackend, $filter) {
    
        var books = [
            {
                id: 1,
                cover: 'images/books/book_1.png',
                title: 'Совершенный код',
                authors: ['С. Макконнелл'],
                year: 2005,
                pages: 777,
                available: 3,
                count: 5,
                rating: 2,
                description: '«Энциклопедия хороших практик программирования. Совершенный код фокусируется на личном искусстве, мастерстве — тех вещах, которые мы интуитивно называем writing clean code. Это та книга, которая может 50 страниц описывать правильное форматирование кода и количество пробелов». Джо Спольски.'
            },
            {
                id: 2,
                cover: 'images/books/book_2.png',
                title: 'Программист-прагматик. Путь от подмастерья к мастеру',
                authors: ['Э. Хант, Д. Томас'],
                year: 1999,
                pages: 421,
                available: 8,
                count: 10,
                rating: 5,
                description: '«Это великая книга для программистов, которые где-то как-то научились программировать, может быть, в институте, но не совсем уверены что и как делать. Это как разница между наброском и готовым произведением. То, что вы изучали в университете — это наброски, эскизы, и вы вроде бы можете рисовать красиво, но если всё ещё чувствуете, что не вполне знаете с чего начать, если кто-то предложил вам написать программу для обмена музыкой через P2P-сети, то эта книга для вас». Джо Спольски.'
            },
            {
                id: 3,
                cover: 'images/books/book_3.png',
                title: 'Структура и Интерпретация Компьютерных Программ',
                authors: ['Харольд Абельсон, Джеральд Джей Сассман'],
                year: 2004,
                pages: 551,
                available: 4,
                count: 8,
                rating: 3,
                description: 'Структура и интерпретация компьютерных программ преподавалась в Массачусетском технологическом институте, и этот курс имел влияние на весь мир по учебным программам компьютерных наук в течение последних двух десятилетий. На stackoverflow пишут, что книга буквально просветлит нас (will enlighten you) и после нее появится стремление писать великолепные программы. И что если все остальные книги делают из нас лучшего (better) программиста, то конкретно эта — сделает из читателя программиста.'
            },
            {
                id: 4,
                cover: 'images/books/book_4.png',
                title: 'Язык программирования C',
                authors: ['Брайан Керниган, Деннис Ритчи'],
                year: 2014,
                pages: 348,
                available: 1,
                count: 7,
                rating: 3,
                description: 'Честно говоря, мне не до конца ясно, почему книга об определенном языке программирования попала на столь высокое место, тем более в наше время высокоуровневых языков и фреймворков. Быть может потому, что книга Кернигана и Ритчи – это культовая книга по программированию на языке Си от создателей языка, где они рассказывают своим читателям о широких возможностях Си и особенностях, отличающих его от других языков структурного программирования. Ведь в свое время язык Си разрабатывали специально для операционной системы Unix, но созданный язык был настолько универсален, что нашел свое применение и в других сферах программирования.'
            },
            {
                id: 5,
                cover: 'images/books/book_5.png',
                title: 'Алгоритмы. Построение и анализ',
                authors: ['Томас Кормен, Чарльз Лейзерсон, Рональд Ривест, Клиффорд Штайн'],
                year: 1985,
                pages: 954,
                available: 7,
                count: 8,
                rating: 4,
                description: 'Книга представляет собой перевод учебника по курсу построения и анализа эффективных алгоритмов, написанного в Массачусетском технологическом институте; в ней разбираются важнейшие классы быстрых алгоритмов и приёмы их построения. Изложение подробное и математически строгое. Книгу можно использовать в качестве учебника и справочника; она будет полезна как студентам, так и профессионалам в области IT.'
            },
            {
                id: 6,
                cover: 'images/books/book_6.png',
                title: 'Бейсик в задачах и примерах',
                authors: ['И. К. Сафронов'],
                year: 2001,
                pages: 15,
                available: 0,
                count: 3,
                rating: 1,
                description: 'Язык программирования QBasic на протяжении многих лет пользуется огромным спросом среди начинающих и опытных программистов. Данный сборник задач содержит массу авторских разработок, которые позволяют убедиться в оригинальности и огромных возможностях Бейсика. Именно огромный читательский спрос на первое издание побудил автора заняться разработкой второго, не менее увлекательного самоучителя.'
            },
            {
                id: 7,
                cover: 'images/books/book_6.png',
                title: 'Бейсик в задачах и примерах',
                authors: ['Чарльз Лейзерсон, Рональд Ривест'],
                year: 2001,
                pages: 15,
                available: 0,
                count: 3,
                rating: 1,
                description: 'Язык программирования QBasic на протяжении многих лет пользуется огромным спросом среди начинающих и опытных программистов. Данный сборник задач содержит массу авторских разработок, которые позволяют убедиться в оригинальности и огромных возможностях Бейсика. Именно огромный читательский спрос на первое издание побудил автора заняться разработкой второго, не менее увлекательного самоучителя.'
            }
        ];

        $httpBackend.whenGET('/api/catalog').respond(200, books, {});

        $httpBackend.whenPOST('/api/catalog/filtered').respond(function (method, url, data) {
            var searchString = data;

            if (searchString) {
                var filteredBooks = $filter('booksSearch')(books, searchString);
                return [200, filteredBooks, {}];
            } else {
                return [200, books, {}];
            }
        });

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