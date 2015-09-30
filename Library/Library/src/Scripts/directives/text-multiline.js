(function () {
    'use strict';

    angular.module('app')
    .directive('textMultiline', function () {
        return {
            restrict: 'A',
            scope: {
                textMultiline: '='
            },
            templateUrl: 'Partials/directives/text-multiline.html',
            transclude: true,
            link: function (scope) {
                scope.$on('$destroy', scope.$watch('textMultiline', function () {
                    if (scope.textMultiline) {
                        scope.strings = scope.textMultiline.split(/\n/g);
                    }
                }));
            }
        };
    });
}());