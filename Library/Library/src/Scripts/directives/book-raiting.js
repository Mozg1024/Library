(function () {
    'use strict';
    angular.module('app')
        .directive('bookRaiting', bookRaiting);
        function bookRaiting(catalogService) {
            return {
                restrict: 'A',
                scope: {
                    bookId: '@',
                    bookRating: '@'
                },
                templateUrl: 'Partials/directives/book-rating.html',
                link: function (scope, element, attr) {

                        var uuiRaitingElement = $('.uui-rating');

                        uuiRaitingElement.uui_rating('init', { count: 5, animate_hover: true });
                        uuiRaitingElement.uui_rating('set_value', scope.bookRating);
                        $("#orderSwitch").bootstrapSwitch();

                        element.on("click", function () {
                            scope.actualRating = uuiRaitingElement.uui_rating('get_value');
                            catalogService.rateBook(scope.bookId, scope.actualRating);
                            uuiRaitingElement.uui_rating('set_value', scope.bookRating);
                        });
                        
                        scope.$watch('bookId', function () {
                            uuiRaitingElement.uui_rating('set_value', scope.bookRating);
                        });
                }
            };
        } 
}());