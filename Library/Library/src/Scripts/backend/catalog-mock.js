(function () {
    'use strict';

    angular.module('app')
        .run(fakeBooksBack);

    function fakeBooksBack($httpBackend, $filter, loginService) {
    
        var books = [
            {
                id: 1,
                threadId: 2001,
                cover: 'images/books/book_1.png',
                title: 'Совершенный код',
                authors: ['С. Макконнелл'],
                year: 2005,
                pages: 777,
                available: 3,
                count: 5,
                rating: 4,
                description: '«Энциклопедия хороших практик программирования. Совершенный код фокусируется на личном искусстве, мастерстве — тех вещах, которые мы интуитивно называем writing clean code. Это та книга, которая может 50 страниц описывать правильное форматирование кода и количество пробелов».\nДжо Спольски.'
            },
            {
                id: 2,
                threadId: 2002,
                cover: 'images/books/book_2.png',
                title: 'Программист-прагматик. Путь от подмастерья к мастеру',
                authors: ['Э. Хант','Д. Томас'],
                year: 1999,
                pages: 421,
                available: 8,
                count: 10,
                rating: 5,
                description: '«Это великая книга для программистов, которые где-то как-то научились программировать, может быть, в институте, но не совсем уверены что и как делать. Это как разница между наброском и готовым произведением.\nТо, что вы изучали в университете — это наброски, эскизы, и вы вроде бы можете рисовать красиво, но если всё ещё чувствуете, что не вполне знаете с чего начать, если кто-то предложил вам написать программу для обмена музыкой через P2P-сети, то эта книга для вас».\nДжо Спольски.'
            },
            {
                id: 3,
                threadId: 2003,
                cover: 'images/books/book_3.png',
                title: 'Структура и Интерпретация Компьютерных Программ',
                authors: ['Харольд Абельсон', 'Джеральд Джей Сассман'],
                year: 2004,
                pages: 551,
                available: 4,
                count: 8,
                rating: 3,
                description: 'Структура и интерпретация компьютерных программ преподавалась в Массачусетском технологическом институте, и этот курс имел влияние на весь мир по учебным программам компьютерных наук в течение последних двух десятилетий.\nНа stackoverflow пишут, что книга буквально просветлит нас (will enlighten you) и после нее появится стремление писать великолепные программы. И что если все остальные книги делают из нас лучшего (better) программиста, то конкретно эта — сделает из читателя программиста.'
            },
            {
                id: 4,
                threadId: 2004,
                cover: 'images/books/book_4.png',
                title: 'Язык программирования C',
                authors: ['Брайан Керниган','Деннис Ритчи'],
                year: 2014,
                pages: 348,
                available: 1,
                count: 7,
                rating: 3,
                description: 'Честно говоря, мне не до конца ясно, почему книга об определенном языке программирования попала на столь высокое место, тем более в наше время высокоуровневых языков и фреймворков. Быть может потому, что книга Кернигана и Ритчи – это культовая книга по программированию на языке Си от создателей языка, где они рассказывают своим читателям о широких возможностях Си и особенностях, отличающих его от других языков структурного программирования. Ведь в свое время язык Си разрабатывали специально для операционной системы Unix, но созданный язык был настолько универсален, что нашел свое применение и в других сферах программирования.'
            },
            {
                id: 5,
                threadId: 2005,
                cover: 'images/books/book_5.png',
                title: 'Алгоритмы. Построение и анализ',
                authors: ['Томас Кормен', 'Чарльз Лейзерсон', 'Рональд Ривест', 'Клиффорд Штайн'],
                year: 1985,
                pages: 954,
                available: 3,
                count: 8,
                rating: 4,
                description: 'Книга представляет собой перевод учебника по курсу построения и анализа эффективных алгоритмов, написанного в Массачусетском технологическом институте; в ней разбираются важнейшие классы быстрых алгоритмов и приёмы их построения. Изложение подробное и математически строгое. Книгу можно использовать в качестве учебника и справочника; она будет полезна как студентам, так и профессионалам в области IT.'
            },
            {
                id: 6,
                threadId: 2006,
                cover: 'images/books/book_6.png',
                title: 'Бейсик в задачах и примерах',
                authors: ['И. К. Сафронов'],
                year: 2001,
                pages: 15,
                available: 3,
                count: 3,
                rating: 1,
                description: 'Язык программирования QBasic на протяжении многих лет пользуется огромным спросом среди начинающих и опытных программистов. Данный сборник задач содержит массу авторских разработок, которые позволяют убедиться в оригинальности и огромных возможностях Бейсика. Именно огромный читательский спрос на первое издание побудил автора заняться разработкой второго, не менее увлекательного самоучителя.'
            }
        ],

        orders = [
            {
                id: 5002,
                userId: 4002,
                bookId: 2
            },
            {
                id: 5003,
                userId: 4001,
                bookId: 4
            },
            {
                id: 5004,
                userId: 4003,
                bookId: 1
            },
            {
                id: 5005,
                userId: 4001,
                bookId: 3
            },
            {
                id: 5006,
                userId: 4004,
                bookId: 5
            }
        ],

        wishes = [
            {
                id: 5008,
                userId: 4002,
                bookId: 5
            },
            {
                id: 5009,
                userId: 4001,
                bookId: 2
            },
            {
                id: 5010,
                userId: 4003,
                bookId: 2
            },
            {
                id: 5011,
                userId: 4001,
                bookId: 5
            },
            {
                id: 5012,
                userId: 4004,
                bookId: 3
            }
        ],

        orderCounter = 5013;

        $httpBackend.whenGET(/^\/api\/catalog\/?$/).respond(200, books, {});

        $httpBackend.whenPOST(/^\/api\/catalog\/filtered\/?$/).respond(function (method, url, data) {
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
        
        $httpBackend.whenPOST(/^\/api\/order\/?$/).respond(function (method, url, data) {
            var loggedUserId = +loginService.getUserId(),
                userOrders = _.filter(orders, { userId: loggedUserId }),
                userWishes = _.filter(wishes, { userId: loggedUserId }),
                book,
                wish,
                order;

            if (book = _.find(books, { id: +data })) {
                wish = _.find(userWishes, { bookId: book.id });
                order = _.find(userOrders, { bookId: book.id });

                if (!wish || !order) {
                    wish = {
                        id: orderCounter++,
                        userId: loggedUserId,
                        bookId: book.id,
                    };
                    wishes.push(wish);
                    return [200, wish.id];
                }
            }
            return [404];
        });

        $httpBackend.whenPOST(/^\/api\/order\/cancel\/?$/).respond(function (method, url, data) {
            var loggedUserId = +loginService.getUserId(),
                userOrders = _.filter(orders, { userId: loggedUserId }),
                userWishes = _.filter(wishes, { userId: loggedUserId }),
                book,
                wish;

            if (book = _.find(books, { id: +data })) {
                if (wish = _.find(userWishes, { bookId: book.id })) {
                    wishes = _.without(wishes, wish);
                    return [200];
                }
                return [403];
            }
            return [404];
        });

        $httpBackend.whenGET(/^\/api\/ordered\/books\/?$/).respond(function (method, url) {
            var loggedUserId = +loginService.getUserId(),
                userOrders = _.filter(orders, { userId: loggedUserId });

            return [200, _.filter(books, function (book) {
                return _.find(userOrders, { bookId: book.id });
            })];
        });

        $httpBackend.whenGET(/^\/api\/wanted\/books\/?$/).respond(function (method, url) {
            var loggedUserId = +loginService.getUserId(),
                userWishes = _.filter(wishes, { userId: loggedUserId });

            return [200, _.filter(books, function (book) {
                return _.find(userWishes, { bookId: book.id });
            })];
        });

        $httpBackend.whenGET(/^\/api\/order\/status\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
                bookId = +url.match(regexp),
                loggedUserId = +loginService.getUserId(),
                userWishes = _.filter(wishes, { userId: loggedUserId }),
                userOrders = _.filter(orders, { userId: loggedUserId });

            if (_.find(userWishes, { bookId: bookId })) {
                return [200, 'wish'];
            }
            if (_.find(userOrders, { bookId: bookId })) {
                return [200, 'order'];
            }
            return [404];
        });

        $httpBackend.whenPOST(/^\/api\/ratebook\/?$/).respond(200);

        $httpBackend.whenGET('/api/wishes').respond(function (method, url) {

            return [200, wishes, {}];
        });

        $httpBackend.whenPOST('/api/wishes/approve').respond(function (method, url, data) {

            var items = _.remove(wishes, function (wish) {
                return wish.id === +data;
            });

            if (items.length > 0) {

                items[0].id = orderCounter++;
                orders.push(items[0]);
                return [200, wishes, {}];
            } else {
                return [404];
            }
            
        });
        $httpBackend.whenPOST('/api/wishes/decline').respond(function (method, url, data) {

            var items = _.remove(wishes, function (wish) {
                return wish.id === +data;
            });

            if (items.length > 0) {
                return [200, wishes, {}];
            } else {
                return [404];
            }
            
        });

    }
}());