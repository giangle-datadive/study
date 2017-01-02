let Actions = require('../actions/Actions');
let Stores = require('../stores/Stores');

let Api = {
    addNote(note) {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/sticky/collections/notes?apiKey=aWPiSg3ZqxrTZdr-mMV4Qv0RF724wMNT',
            data: JSON.stringify(note),
            contentType: 'application/json',
            type: 'POST',
            success: function (response) {
                Actions.saveNoteLocal(response);
            }
        });
    },

    getNotes() {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/sticky/collections/notes?apiKey=aWPiSg3ZqxrTZdr-mMV4Qv0RF724wMNT',
            cache: false,
            success: function (response) {
                Actions.receiveNotes(response);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    },

    removeNote(noteId) {
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/sticky/collections/notes/' + noteId.$oid + '?apiKey=aWPiSg3ZqxrTZdr-mMV4Qv0RF724wMNT',
            contentType: 'application/json',
            type: 'DELETE',
            success: function (response) {

            },
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }
};

module.exports = Api;