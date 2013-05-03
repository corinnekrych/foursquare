var foursquare = foursquare || {};

foursquare.loadfriend = (function () {
    foursquare.configuration.domain.push({
        name: 'friend',
        view: {
            'list': $('#section-list-friend'),
            'save': $('#submit-friend'),
            'add': $('#add-friend'),
            'show': $('a[id^="friend-list-"]'),
            'remove': $('#delete-friend')
        },
        options: {
            offline: true,
            eventPush: true
        }

    });
}());
