let appDispatcher = require("../dispatcher/appDispatcher");
let appConstants = require("../constants/appConstants");
let EventEmitter = require("events").EventEmitter;
let assign = require("object-assign");
let appAPI = require("../utils/appAPI.js");

let CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

let appStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    setMoviesResult: function (movies) {
        _movies = movies;
    },
    getMoviesResult: function () {
        return _movies;
    },
    setSelected: function (selected) {
        _selected = selected;
    },
    getSelected: function () {
        return _selected;
    }

});

appDispatcher.register(function (payload) {
    let action = payload.action;

    switch (action.actionType) {
        case appConstants.SEARCH_MOVIES:
            appAPI.searchMovies(action.movie);
            appStore.setSelected(action.movie.title);
            appStore.emit(CHANGE_EVENT);
            break;
        case appConstants.RECEIVE_MOVIES:
            appStore.setMoviesResult(action.movies);
            appStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});

module.exports = appStore;