let Info = require("./Info");
let Result = require('./Result');
let AppActions = require('../actions/AppActions');
let AppStores = require('../stores/AppStores');

function getAppState() {
    return AppStores.getAppState();
}

let App = React.createClass({
    getInitialState(){
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
        let content;
        if (this.state.result) {
            content = <Result data={this.state.result}/>;
        } else {
            content = <Info showForm={this.state.showForm}
                            showBtnGroup={this.state.showBtnGroup}/>;
        }
        return (
            <div className="row">
                {content}
            </div>
        )
    }
});

module.exports = App;