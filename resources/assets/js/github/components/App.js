import Profile from "./Profile.js";
import ReposList from "./ReposList.js";
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'iamgiang',
            userData: [],
            userRepos: [],
            perPage: 5,
        };
    }

    getProfile() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.userName,
            dataType: 'JSON',
            data: {
                client_id: this.props.clientId,
                client_secret: this.props.clientSecret,
            },
            success: function (response) {
                this.setState({userData: response});
            }.bind(this),
            error: function (xhr, status, err) {

            }.bind(this)
        });
    }

    getRepos() {
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.userName + '/repos',
            dataType: 'JSON',
            data: {
                client_id: this.props.clientId,
                client_secret: this.props.clientSecret,
                per_page: this.state.perPage,
            },
            success: function (response) {
                this.setState({userRepos: response});
            }.bind(this),
            error: function (xhr, status, err) {

            }.bind(this)
        });
    }

    componentDidMount() {
        this.getProfile();
        this.getRepos();
        console.log(1);
    }

    render() {
        return (
            <div>
                <Profile userData={this.state.userData}/>
            </div>
        );
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'b3ab1192121453b25db1',
    clientSecret: 'af4eb9c35e2e2d50b8235cd3d2e03adf02f7907c'
};

export default App;