let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let appAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';
let _result = null;
let _showForm = false;
let _showBtnGroup = true;

let AppStores = assign({}, EventEmitter.prototype, {
    getAppState() {
        return {
            result: _result,
            showForm: _showForm,
            showBtnGroup: _showBtnGroup,
        }
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
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
        case AppConstants.SHOW_FORM:
            _showForm = true;
            _showBtnGroup = false;
            AppStores.emitChange();
            break;
        case AppConstants.HIDE_FORM:
            _showForm = false;
            _showBtnGroup = true;
            AppStores.emitChange();
            break;
        case AppConstants.VIEW:
            console.log('View...');
            appAPI.view(action.data);
            break;
        case AppConstants.UPDATE_RESULT:
            _result = action.data;
            AppStores.emitChange();
            break;
        case AppConstants.REPLAY:
            _result = null;
            _showForm = false;
            _showBtnGroup = true;
            AppStores.emitChange();
            break;
    }
});

module.exports = AppStores;