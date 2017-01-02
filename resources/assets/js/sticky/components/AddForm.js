let Actions = require('../actions/Actions');

let AddForm = React.createClass({
    getInitialState() {
        return {
            name: '',
            hasError: true,
        }
    },

    saveName(event) {
        let name = event.target.value;
        this.setState({
            name: name,
            hasError: false,
        });
    },

    onSubmit(event) {
        event.preventDefault();
        if (this.state.name == '') this.setState({hasError: true});
        if (!this.state.hasError) {
            Actions.saveNote({
                name: this.state.name,
            });
        }
    },

    render() {
        let errorClass = '';
        if (this.state.hasError) errorClass = 'has-danger ';
        return (
            <div>
                <h5>Add a note</h5>
                <form onSubmit={this.onSubmit}>
                    <div className={errorClass + "form-group"}>
                        <label htmlFor="name">Name</label>
                        <input onChange={this.saveName} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-secondary" value="Add"/>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AddForm;