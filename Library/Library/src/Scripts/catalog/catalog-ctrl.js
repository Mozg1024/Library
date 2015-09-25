(function () {
    'use strict';

    angular.module('app')
        .controller('catalogCtrl', catalogCtrl);

    function catalogCtrl(catalogService) {
        var vm = this;

        vm.book = catalogService.getBook(1);

        //vm.book.id = 1;
        //vm.book.cover = 'images/books/book_1.png';

        //vm.book.title = 'Book 1';
        //vm.book.authors = ['Jeffrey Richter'];
        //vm.book.year = 2015;
        //vm.book.pages = 777;
        //vm.book.available = 3;
        //vm.book.count = 5;
        //vm.book.rating = 2;
        //vm.book.description = 'Et tellus suspendisse suscipit orci sit amet sem venenatis nec lobortis sem suscipit nullam nec imperdiet velit mauris eu nisi a felis imperdiet porta at ac nulla vivamus faucibus felis nec dolor pretium eget pellentesque dolor suscipit maecenas vitae enim arcu, at tincidunt nunc pellentesque eleifend vulputate lacus. Vel semper sem ornare sit amet proin sem sapien, auctor vel faucibus id, aliquet vitae ipsum etiam auctor ultricies ante, at dapibus urna viverra sed nullam mi arcu, tempor vitae interdum a, sodales non urna vestibulum dignissim auctor mauris, ac elementum purus fermentum vitae duis placerat laoreet risus, sit amet eleifend tellus lobortis non vivamus iaculis dapibus leo a ornare cras vel sem at felis convallis mollis posuere ultrices dolor sed tellus arcu, accumsan a consectetur sit amet, volutpat eget lorem phasellus quis ipsum orci integer sodales tincidunt nibh a elementum ut ac libero nec orci euismod euismod nec at nulla duis malesuada faucibus porta aliquam nec consequat eros sed porttitor placerat dolor, accumsan imperdiet neque ornare in aenean non elit non leo porta mattis mauris non dolor nunc, id congue odio donec tellus nisl, semper id consectetur vitae, dapibus dictum nisl morbi sed augue purus sed dictum. Diam convallis tortor interdum volutpat phasellus dapibus arcu sit amet neque vulputate sed elementum orci fringilla in hac habitasse platea dictumst maecenas ut dui diam curabitur adipiscing vestibulum libero, nec varius dui pulvinar eget vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; aliquam dui neque, varius eu laoreet vel.';

        vm.comments = [
            {
                user: {
                    avatar: 'images/users/Aleksei_Prokofev.jpg',
                    name: 'Alexey Prokofiev'
                },
                date: new Date(2015, 2, 12, 9, 45),
                lines: [
                    'Interesting tamada.',
                    'Contests also interesting.'
                ]
            },
            {
                user: {
                    avatar: 'images/users/Rustam_Mamedov.jpg',
                    name: 'Rustam Mamedov'
                },
                date: new Date(2015, 5, 17, 13, 1),
                lines: [
                    'I am sick of this book.',
                    '(((((((((((('
                ]
            }
        ];
    }

}());