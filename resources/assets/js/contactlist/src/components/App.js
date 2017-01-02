let AppActions = require('../actions/AppActions');
let AppStores = require('../stores/AppStores');
let AddForm = require('./AddForm');

function getAppState() {
    return {
        contacts: AppStores.getContacts(),
    };
}

let App = React.createClass({
    getInitialState() {
        return getAppState();
    },

    componentDidMount() {
        AppStores.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        AppStores.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(getAppState());
    },

    render() {
        console.log(this.state.contacts);
        return (
            <div>
                <AddForm/>
            </div>
        )
    }

});

module.exports = App;