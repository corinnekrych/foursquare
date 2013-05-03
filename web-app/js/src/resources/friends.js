angular.module('resources.friends', [])
.factory('friends', function () {
    var friends = [{
        id: 1,
        firstname: "corinne",
        lastname: "krych"
    }, {
        id: 2,
        firstname: "fabrice",
        lastname: "matrat"
    }]

    return friends;
});