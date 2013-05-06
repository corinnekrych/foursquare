'use strict';

angular.module('foursquareApp', ['resources.friends'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/friends', {
                            templateUrl: 'js/src/app/friend/friends-list.tpl.html',
                            controller: 'FriendListCtrl',
                            resolve: {friends:['friends', function(friends) { return friends; }] }
                          });
    $routeProvider.when('/friends/:friendId', {
                                    templateUrl: 'js/src/app/friend/friends-edit.tpl.html',
                                    controller: 'FriendEditCtrl',
                                    resolve: {friend: ['friends', '$route', function (friends, $route) {
                                                                                                return friends[$route.current.params.friendId];} ]} }
    )
    .otherwise({redirectTo: '/friends'});
}])
.controller('FriendListCtrl', ['$scope', 'friends',  function($scope, friends) {
    $scope.friends = friends
}])
.controller('FriendEditCtrl', ['$scope', '$route', 'friend', function($scope, $route, friend) {
   $scope.friend = friend;
}])
;
