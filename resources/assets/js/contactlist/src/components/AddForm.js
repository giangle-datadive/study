let AppActions = require('../actions/AppActions');
let AppStores = require('../stores/AppStores');

let AddForm = React.createClass({
    handleSubmit(event) {
        event.preventDefault();
        event.pr
        let contact = {
            name: this.refs.name.value.trim(),
            email: this.refs.email.value.trim(),
            phone: this.refs.phone.value.trim(),
        };
        AppActions.saveContact(contact);
    },

    render() {
        return (
            <div className="add-contact">
                <form>
                    <div className="form-group">
                        <input type="text" ref="name" placeholder="Enter Name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" ref="email" placeholder="Enter Email"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" placeholder="Enter Phone"
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button onClick={this.handleSubmit} type="submit" className="btn btn-secondary">Add</button>
                    </div>
                </form>
            </div>
        )
    }

});

module.exports = AddForm;