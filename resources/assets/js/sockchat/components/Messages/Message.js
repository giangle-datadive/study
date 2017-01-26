import React from "react";
class Message extends React.Component {
    render() {
        let time = this.formatTime(this.props.message.timeStamp);
        return (
            <div className="message">
                <strong>{this.props.message.user}</strong>
                {time + ': ' + this.props.message.text}
            </div>
        )
    }

    formatTime(timestamp) {
        let dt = new Date(timestamp);
        let hour = dt.getHours();
        let minute = dt.getMinutes();
        let second = dt.getSeconds();

        return hour + ':' + minute + ':' + second;
    }
}

Message.defaultProps = {
    message: {},
};

export default Message;