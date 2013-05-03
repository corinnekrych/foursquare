var foursquare = foursquare || {};

foursquare.loadplace = (function () {
    foursquare.configuration.domain.push({
        name: 'place',
        view: {
            'list': $('#section-list-place'),
            'save': $('#submit-place'),
            'add': $('#add-place'),
            'show': $('a[id^="place-list-"]'),
            'remove': $('#delete-place')
        },
        options: {
            offline: true,
            eventPush: true
        }

    });
}());
