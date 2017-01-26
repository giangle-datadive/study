import React from "react";
class MessageForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <textarea className="form-control" ref="text"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Send"/>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.emit('messageAdd', {
            timestamp: Date.now(),
            text: this.refs.text.value.trim(),
            user: this.props.user.name,
        });

        this.refs.text.value = ''
    }
}

MessageForm.defaultProps = {
    emit: () => {},
};

export default MessageForm;