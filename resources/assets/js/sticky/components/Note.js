let Actions = require('../actions/Actions');

let Note = React.createClass({

    render() {
        return (
            <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="note col-xs-6 col-md-4">
                <div>
                    <p>{this.props.note.name}</p>
                </div>
            </div>
        );
    },

    removeNote(noteId) {
        Actions.removeNote(noteId);
    }
});

module.exports = Note;