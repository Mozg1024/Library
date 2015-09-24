(function () {
    'use strict';

    angular.module('app')
        .controller('profileCtrl', profileCtrl);

    function profileCtrl() {
        var vm = this;

        vm.books = [
            {
                id: 1,
                cover: 'images/books/book_1.png',
                title: 'Book 1',
                author: 'Jeffrey Richter',
                year: 2015,
                pages: 777,
                available: 3,
                count: 5,
                rating: 2,
                description: [
                    'Et tellus suspendisse suscipit orci sit amet sem venenatis nec lobortis sem suscipit nullam nec imperdiet velit mauris eu nisi a felis imperdiet porta at ac nulla vivamus faucibus felis nec dolor pretium eget pellentesque dolor suscipit maecenas vitae enim arcu, at tincidunt nunc pellentesque eleifend vulputate lacus.',
                    'Vel semper sem ornare sit amet proin sem sapien, auctor vel faucibus id, aliquet vitae ipsum etiam auctor ultricies ante, at dapibus urna viverra sed nullam mi arcu, tempor vitae interdum a, sodales non urna vestibulum dignissim auctor mauris, ac elementum purus fermentum vitae duis placerat laoreet risus, sit amet eleifend tellus lobortis non vivamus iaculis dapibus leo a ornare cras vel sem at felis convallis mollis posuere ultrices dolor sed tellus arcu, accumsan a consectetur sit amet, volutpat eget lorem phasellus quis ipsum orci integer sodales tincidunt nibh a elementum ut ac libero nec orci euismod euismod nec at nulla duis malesuada faucibus porta aliquam nec consequat eros sed porttitor placerat dolor, accumsan imperdiet neque ornare in aenean non elit non leo porta mattis mauris non dolor nunc, id congue odio donec tellus nisl, semper id consectetur vitae, dapibus dictum nisl morbi sed augue purus sed dictum.',
                    'Diam convallis tortor interdum volutpat phasellus dapibus arcu sit amet neque vulputate sed elementum orci fringilla in hac habitasse platea dictumst maecenas ut dui diam curabitur adipiscing vestibulum libero, nec varius dui pulvinar eget vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; aliquam dui neque, varius eu laoreet vel.'
                ]
            },
            {
                id: 2,
                cover: 'images/books/book_2.png',
                title: 'Book 2',
                author: 'Adam Freeman',
                year: 2014,
                pages: 666,
                available: 1,
                count: 3,
                rating: 1,
                description: [
                    'Et tellus suspendisse suscipit orci sit amet sem venenatis nec lobortis sem suscipit nullam nec imperdiet velit mauris eu nisi a felis imperdiet porta atacullamusfaucibu felis nec dolor pretium eget pellentesque dolor suscipit maecenas vitae enim arcu, at tincidunt nunc pellentesque eleifend vulputate acus.',
                    'Vel semper sem ornare sit amet proin sem sapien, auctor vel faucibus id, aliquet vitae ipsum etiam auctor ultricies ante, at dapibus urna viverrasednullammi ,temporvitaeinterdum a, sodales non urna vestibulum dignissim auctor mauris, ac elementum purus fermentum vitae duis placerat laoreet risus, sitameteifendlluslobortis no vivamusiaculis dapibus leo a ornare cras vel sem at felis convallis mollis posuere ultrices dolor sed tellus arcu, accumsan a nsectetursitet,olutpat eget loremphasellus quisipsum orci integer sodales tincidunt nibh a elementum ut ac libero nec orci euismod euismod nec at ulla uis malesuadaucibusortaaliquam nec consequateros sed porttitorplacerat dolor, accumsan imperdiet neque ornare in aenean non elit non leo porta attis auris non dolor unc, dconguediodonec tellus nisl, semperid consectetur vitae,dapibus dictum nisl morbi sed augue purus sed dictum.',
                    'Diam convallis tortor interdum volutpat phasellus dapibus arcu sit amet neque vulputate sed elementum orci fringilla in hac habitasseplateadictumstmaecenasuidiamcurabitur adipiscing vestibulum libero, nec varius dui pulvinar eget vestibulum ante ipsum primis in faucibus orci luctus et ultricesposuerecubiliaae;liquamduineque, varius eu laoreet vel.'
                ]
            }
        ];
    };

}());