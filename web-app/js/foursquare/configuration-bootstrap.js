var foursquare = foursquare || {};

foursquare.loadConfiguration = (function () {
    foursquare.configuration = {
        baseURL: "http://localhost:8080/foursquare/",
        //Uncomment before pushing to cloudfoundry
        //baseURL: "http://foursquare.cloudfoundry.com/",
        namespace: "foursquare",
        domain:[]
    };
})();

