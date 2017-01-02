let AppActions = require('../actions/AppActions');
let AppStores = require('../stores/AppStores');
let appAPI = require('../utils/appAPI');
let SearchForm = require('./SearchForm');
let SearchResults = require('./SearchResults');

function getAppState() {
    return {

    }
}

let App = React.createClass({
    getInitialState() {
        return getAppState();
    },

    _onChange() {
        this.setState(getAppState());
    },

    componentDidMount() {
        AppStores.addChangeListener(this._onChange);
    },

    componentWillUnmuont() {
        AppStores.removeChangeListener(this._onChange);
    },

    render() {
        return (
            <div>
                <SearchForm/>
                <SearchResults/>
            </div>
        )
    }
});

module.exports = App;