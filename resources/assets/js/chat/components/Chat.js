import ChatList from "./ChatList";
import request from "superagent";
import ChatForm from "./ChatForm";

class Chat extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        let chat = this;
        request
            .get('/react/chat/messages')
            .end(function (err, res) {
                chat.setState({
                    messages: res.body
                });
            });
    }

    sendMessage(message, event) {
        this.setState({
            messages: this.state.messages.concat([message])
        });
    }

    render() {
        return (
            <div className="col-md-5">
                <ChatList messages={this.state.messages}/>
                <ChatForm onSendMessage={this.sendMessage.bind(this)}/>
            </div>
        );
    }
}

export default Chat;
