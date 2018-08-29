var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        console.log(data);
      }
    })
  };
};

module.exports = TV;