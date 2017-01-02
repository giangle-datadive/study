let appActions = require('../actions/appActions');
let request = require('superagent');

module.exports = {
    searchMovies: function (movie) {
        request
            .get('https://www.omdbapi.com')
            .query({s: movie.title})
            .end(function (err, res) {
                if (!err) {
                    appActions.receiveMovieResult(res.body.Search)
                }
            }.bind(this))
    }
};