(function () {
    'use strict';
    angular.module('app')
        .directive('orderControlPanel', orderControlPanel);

        function orderControlPanel (loginService, catalogService) {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'Partials/directives/order-control-panel.html',
                scope: {
                    wishId: '@',
                    bookId: '@',
                    userId: '@'
                },
                link: function (scope, element, attrs) {

                    scope.$watch('wishId', function () {
                        catalogService.getBook(scope.bookId).then(function (response) {
                            scope.book = response.data;
                        });
                        loginService.getUserById(scope.userId).then(function (response) {
                            scope.user = response.data;
                        });
                    });
                    
                }
            };
        }
}());