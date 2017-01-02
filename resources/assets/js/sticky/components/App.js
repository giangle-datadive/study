let Actions = require('../actions/Actions');
let Stores = require('../stores/Stores');
let AddForm = require('./AddForm');
let ListNotes = require('./ListNotes');

function getAppState() {
    return {
        notes: Stores.getNotes()
    };
}

let App = React.createClass({
    getInitialState() {
        return getAppState();
    },

    componentDidMount() {
        Stores.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        Stores.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(getAppState());
    },


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AddForm/>
                    </div>
                    <div className="col-md-9">
                        <ListNotes notes={this.state.notes}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;