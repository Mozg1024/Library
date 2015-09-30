(function () {
    'use strict';
    angular.module('app')
        .directive('bookRaiting', bookRaiting);
        function bookRaiting(catalogService) {
            return {
                restrict: 'A',
                replace: true,
                scope: {
                    bookId: '@',
                    bookRating: '@'
                },
                templateUrl: 'Partials/directives/book-rating.html',
                link: function (scope, element, attr) {

                        var uuiRatingElement = $('.uui-rating');

                            uuiRatingElement.uui_rating('init', { count: 5, animate_hover: true });
                            uuiRatingElement.uui_rating('set_value', scope.bookRating);
                            $("#orderSwitch").bootstrapSwitch();

                        function changeRating () {

                            scope.actualRating = uuiRatingElement.uui_rating('get_value');
                            catalogService.rateBook(scope.bookId, scope.actualRating);
                            uuiRatingElement.uui_rating('set_value', scope.actualRating);
                        }

                        function selectRating () {

                            uuiRatingElement.uui_rating('set_value', 0);
                            uuiRatingElement.toggleClass('blue yellow');
                        }

                        function cancelSelecting () {

                            uuiRatingElement.toggleClass('blue yellow');
                            uuiRatingElement.uui_rating('set_value', scope.bookRating);
                        }

                        element.on('click', changeRating);

                        element.on('mouseenter', selectRating);

                        element.on('mouseleave', cancelSelecting);

                        scope.$watch('bookId', function () {
                            uuiRatingElement.uui_rating('set_value', scope.bookRating);
                        });
                }
            };
        } 
}());