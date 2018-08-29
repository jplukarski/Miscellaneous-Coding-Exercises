var request = require("request");

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var info = JSON.parse(body);
        var name = info.name;
        var rating = info.rating.average;
        var genre = info.genres.join(", ");
        var network = info.network.name;
        var summary = info.summary;

        console.log("Show name: " + name + "\n" + "Show rating: " + rating + "\n" + "Show genre: " + genre + "\n" + "Show network: " + network + "\n" + "Show summary: " + summary);
      } else {
        console.log("Error Is: " + error);
      }
    })
  };
  this.findActor = function (actor) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    request(URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        var info = JSON.parse(body)[0];
        var name = info.person.name;
        var birthday = info.person.birthday;
        var gender = info.person.gender;
        var country = info.person.country

        console.log("Actor name: " + name + "\n" + "Actor birthday: " + birthday + "\n" + "Actor gender: " + gender + "\n" + "Actor country: " + JSON.stringify(country.name));
      } else {
        console.log("Error Is: " + error);
      }
    })
  };
};

module.exports = TV;