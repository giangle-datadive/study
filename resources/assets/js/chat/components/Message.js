class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let className = 'list-group-item';
        if (this.props.index % 2 == 0) {
            className += ' send';
        } else {
            className += ' receive';
        }
        return (
            <li className={className}>
                <span>{this.props.message}</span>
            </li>
        );
    }
}

Message.setDefaultProps = {
    message: '',
};

export default Message;
