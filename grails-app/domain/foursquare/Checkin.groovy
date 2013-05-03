package foursquare

class Checkin {
    String description
    Place place
    static hasMany = [friends:Friend]
    static constraints = {
    }
}
