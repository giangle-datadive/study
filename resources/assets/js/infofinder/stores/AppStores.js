let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let appAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

let AppStores = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    getAppState() {
        return {
            result: _result,
        }
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {

    }
});

module.exports = AppStores;

