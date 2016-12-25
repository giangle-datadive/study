class ChatForm extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            hasError: false,
        }
    }

    saveMessage(event) {
        this.setState({
            message: event.target.value,
        });
    }

    sendMessage(event) {
        event.preventDefault();
        event.stopPropagation();
        let message = this.state.message;
        if(message != '') {
            let notes = this.refs.notes;
            notes.value = '';
            this.props.onSendMessage(message, event);
        }else{
            this.setState({
                hasError: true
            });
        }

    }

    render() {
        let className = "form-group";
        let errorMessage = '';
        if (this.state.hasError) {
            className += ' has-danger';
            errorMessage = <div className="form-control-feedback">Bạn phải nhập nội dung</div>;
        }
        return (
            <form method="POST" className="send-message">
                <div className={className}>
                    <textarea ref="notes" id="notes" onChange={this.saveMessage.bind(this)} className="form-control" rows="3"></textarea>
                    {errorMessage}
                </div>
                <div className="form-group">
                    <button onClick={this.sendMessage.bind(this)} className="btn btn-secondary float-xs-right">Send
                    </button>
                </div>
            </form>
        );
    }
}

ChatForm.setDefaultProps = {
    onSendMessage: () => {

    }
};

export default ChatForm;