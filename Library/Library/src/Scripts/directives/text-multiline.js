(function () {
    'use strict';

    angular.module('app')
    .directive("textMultiline", function () {
        return {
            restrict: "A",
            replace: true,
            link: function (scope, element) {
                console.log(element.context.innerHTML);
            }
        };
    });
}());