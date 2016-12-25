import Message from "./Message";

class ChatList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.messages.map((message, index) => {
                    return <Message message={message}
                             key={index}
                            index={index}/>
                })}
            </ul>
        );
    }
}

ChatList.setDefaultProps = {
  messages: []
};

export default ChatList;


