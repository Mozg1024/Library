(function () {
    'use strict';
    angular.module('app')
        .filter('booksSearch', booksSearch);
    function booksSearch() {
        return function (items, paramString) {
            var filtered = [];
            if (angular.isArray(items)) {
                angular.forEach(items, function (item) {
                    if (item.title.indexOf(paramString) === -1) {
                        angular.forEach(item.authors, function (author) {
                            if (author.indexOf(paramString) !== -1) {
                                filtered.push(item);
                            }
                        });
                    } else {
                        filtered.push(item);
                    }
                });
                return filtered;
            } else {
                return items;
            }
        };
    }
}());