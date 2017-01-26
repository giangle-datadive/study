import React from "react";
import UserList from "./Users/UserList";
import UserForm from "./Users/UserForm";
import MessageList from "./Messages/MessageList";
import MessageForm from "./Messages/MessageForm";
import io from "socket.io-client";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            messages: [{
                timeStamp: Date.now(),
                text: 'Welcome to sockchat',
                user: 'Admin'
            }],
            users: [],
            user: ''
        }
    }

    componentWillMount() {
        this.socket = io.connect('http://giang.dev:3000');
        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.on('userJoined', this.onUserJoined.bind(this));
        this.socket.on('messageAdd', this.onMessageAdd.bind(this));
        this.socket.on('disconnect', this.onDisconnect.bind(this));
    }

    onConnect() {
        this.setState({
            status: 'connected',
        });
    }

    onUserJoined(users) {
        this.setState({
            users,
        });
    }

    onMessageAdd(message) {
        this.setState({
            messages: this.state.messages.concat(message),
        });
    }

    onDisconnect(users) {
        this.setState({
            status: 'disconnect',
            users: users
        });
    }

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

    setUser(user) {
        this.setState({
            user: user,
        });
    }

    render() {
        if (this.state.user == '') {
            return <UserForm emit={this.emit.bind(this)} setUser={this.setUser.bind(this)}/>;
        } else {
            return (
                <div className="row">
                    <div className="col-md-4">
                        <UserList users={this.state.users}/>
                    </div>
                    <div className="col-md-8">
                        <MessageList messages={this.state.messages}/>
                        <MessageForm
                            user={this.state.user}
                            emit={this.emit.bind(this)}/>
                    </div>
                </div>
            )
        }
    }
}

export default App;