let Actions = require('../actions/Actions');
let Note = require('./Note');

let ListNotes = React.createClass({

    render() {
        return (
            <div>
                <h5>List notes</h5>
                <div className="row">
                    {this.props.notes.map((note, index) => {
                        return <Note note={note} key={index}/>
                    })}
                </div>
            </div>
        );
    }
});

module.exports = ListNotes;