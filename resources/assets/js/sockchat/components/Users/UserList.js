import React from "react";
class UserList extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.users.map((user, index) => {
                        return <li key={index} className="list-group-item">{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

UserList.defaultProps = {
    users: [],
};

export default UserList;