﻿(function () {
    'use strict';

    angular.module('app')
        .run(fakeUsersBackend);

    function fakeUsersBackend($httpBackend) {

        var users = [
            {
                id: 4001,
                avatar: 'images/users/Dmitry_Vereskun.jpg',
                name: 'Dmitry Vereskun'
            },
            {
                id: 4002,
                avatar: 'images/users/Aleksei_Prokofev.jpg',
                name: 'Aleksey Prokofiev'
            },
            {
                id: 4003,
                avatar: 'images/users/Rustam_Mamedov.jpg',
                name: 'Rustam Mamedov'
            },
            {
                id: 4004,
                avatar: 'images/users/Vladimir_Levin.jpg',
                name: 'Vladimir Levin'
            }
        ];

        $httpBackend.whenGET(/^\/api\/users\/[0-9]+$/).respond(function (method, url) {
            var regexp = /[0-9]+$/,
                userId = +url.match(regexp),
                user = _.find(users, { id: userId })

            if (user) {
                return [200, user, {}];
            }
            return [404];
        });
    }
}());