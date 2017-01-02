let Dispatcher = require('../dispatcher/Dispatcher');
let Constants = require('../constants/Constants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let Api = require('../utils/Api');

const CHANGE_EVENT = 'change';
let _notes = [];

let Stores = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    addNote(note) {
        _notes.push(note);
    },

    getNotes() {
        return _notes;
    },

    changeNotes(notes) {
        _notes = notes;
    },

    removeNote(noteId) {
        let index = _notes.findIndex(x => x._id.$oid === noteId);
        _notes.splice(index);
    }
});

Dispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case Constants.ADD_NOTE:
            //Store in database
            Api.addNote(action.note);

            //emit achange
            Stores.emitChange();
            break;

        case Constants.ADD_NOTE_LOCAL:
            //Store local
            Stores.addNote(action.note);

            //emit achange
            Stores.emitChange();
            break;
        case Constants.RECEIVE_NOTES:
            //Store local
            Stores.changeNotes(action.notes);

            //emit achange
            Stores.emitChange();
            break;
        case Constants.REMOVE_NOTE:
            //Remove local
            Stores.removeNote(action.noteId);

            // Remove on db
            Api.removeNote(action.noteId);

            //emit achange
            Stores.emitChange();
            break;
    }
});

module.exports = Stores;


