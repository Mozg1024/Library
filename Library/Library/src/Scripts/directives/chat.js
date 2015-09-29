(function () {
    'use strict';

    angular.module('app')
    .directive("chat", function (threadsService) {
        return {
            restrict: "A",
            scope: {
                threadId: '@'
            },
            templateUrl: 'Partials/directives/chat.html',
            replace: true,
            link: function (scope) {

                scope.$on('$destroy', scope.$watch('threadId', function () {
                    refresh();
                }));

                scope.addComment = function () {
                    threadsService.addCommentToThread(scope.threadId, scope.textComment);
                    scope.textComment = '';
                    refresh();
                }

                function refresh() {
                    threadsService.getThreadById(scope.threadId).then(function (response) {
                        if (angular.isDefined(response.data) && angular.isArray(response.data.comments)) {
                            scope.comments = response.data.comments;
                        } else {
                            scope.comments = [];
                        }
                    }, function () {
                        scope.comments = [];
                    });
                }
            }
        };
    });
}());