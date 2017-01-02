let Constants = require('../constants/Constants');
let Dispatcher = require('../dispatcher/Dispatcher');

let Actions = {
    saveNote(note) {
        Dispatcher.handleViewAction({
            actionType: Constants.ADD_NOTE,
            note: note,
        });
    },

    receiveNotes(notes) {
        Dispatcher.handleViewAction({
            actionType: Constants.RECEIVE_NOTES,
            notes: notes,
        });
    },

    saveNoteLocal(note) {
        Dispatcher.handleViewAction({
            actionType: Constants.ADD_NOTE_LOCAL,
            note: note,
        });
    },

    removeNote(noteId) {
        Dispatcher.handleViewAction({
            actionType: Constants.REMOVE_NOTE,
            noteId: noteId,
        });
    }
};

module.exports = Actions;