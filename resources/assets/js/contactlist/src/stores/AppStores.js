let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let appAPI = require('../utils/appAPI');

let CHANGE_EVENT = 'change';

let _contacts = [];

let AppStore = assign({}, EventEmitter.prototype, {
    getContacts() {
        return _contacts;
    },

    saveContact(contact) {
        _contacts.push(contact);
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

AppDispatcher.register((payload) => {
    let action = payload.action;
    switch(action.actionType) {
        case AppConstants.SAVE_CONTACT:
            console.log('saving contact...');

            //Save contact
            AppStore.saveContact(action.contact);

            //Save contact firebase
            appAPI.saveContact(action.contact);

            //Emit Change
            AppStore.emitChange();
    }

    return true;
});

module.exports = AppStore;