﻿(function () {
    'use strict';

    angular
        .module('app')
        .run(backendRoutes);

    function backendRoutes($httpBackend) {
        $httpBackend.whenGET(/\/api\/.*/).respond(200);

        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
        $httpBackend.whenDELETE(/.*/).passThrough();
    }
}());