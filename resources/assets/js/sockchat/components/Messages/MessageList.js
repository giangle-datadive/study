import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
class MessageList extends React.Component {
    render() {
        return (
            <div>
                <h3>Message</h3>
                {this.props.messages.map((message, index) => {
                    return <Message message={message} key={index}/>
                })}
            </div>
        )
    }
}

MessageList.defaultProps = {
    messages: [],
};

export default MessageList;