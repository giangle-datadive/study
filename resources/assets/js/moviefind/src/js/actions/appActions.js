let appDispatcher = require("../dispatcher/appDispatcher");
let appConstants = require("../constants/appConstants");

let appActions = {
    searchMovie (movie) {
        appDispatcher.handleViewAction({
            actionType: appConstants.SEARCH_MOVIES,
            movie: movie
        });
    },
    receiveMovieResult(movies) {
        appDispatcher.handleViewAction({
            actionType: appConstants.RECEIVE_MOVIES,
            movies: movies
        });
    }
};

module.exports = appActions;