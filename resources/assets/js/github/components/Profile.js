class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            {this.props.userData.name}
                        </div>
                        <div className="card-block">
                            <div className="media">
                                <a href="#" className="media-left">
                                    <img className="media-object img-100" src={this.props.userData.avatar_url}/>
                                </a>

                                <div className="media-body">
                                    <span className="tag tag-primary">
                                        {this.props.userData.public_repos} Repositories
                                    </span>
                                    <span className="tag tag-success">
                                        {this.props.userData.public_gists} Gists
                                    </span>
                                    <ul className="list-group">
                                        <li className="list-group-itemm">
                                            {this.props.userData.login}
                                        </li>
                                        <li className="list-group-itemm">
                                            {this.props.userData.email}
                                        </li>
                                    </ul>
                                    <a target="_blank" href={this.props.userData.html_url} className="btn btn-primary btn-sm">View
                                        Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
