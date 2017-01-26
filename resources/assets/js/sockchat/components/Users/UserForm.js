import React from "react";
class UserForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Name..." ref="name"/>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        let name = this.refs.name.value.trim();
        this.props.setUser({name: name});
        this.props.emit('userJoined', {name: name});
    }
}
UserForm.defaultProps = {
    setUser: () => {
    },
};

export default UserForm;