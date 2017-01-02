let AppActions = require('../actions/AppActions');
let Result = React.createClass({
    replay(event) {
        event.preventDefault();
        AppActions.replay();
    },

    shareFacebook(event) {
        event.preventDefault();

        let url = $('meta[property="og:url"]').attr('content');
        let title = $('meta[property="org:title"]').attr('content');
        let description = this.props.data.short_description;
        let picture = 'http://giang.dev' + this.props.data.url;

        FB.ui({
            method: 'feed',
            link: url,
            caption : 'Bói vạn sự',
            title: title,
            description: description,
            picture: picture
        }, function (response) {
        });
    },

    render() {
        return (
            <div className="row">
                <div className="image-result col-md-8">
                    <img src={this.props.data.url}/>
                </div>
                <p>{this.props.data.description}</p>
                <div className="btn-result">
                    <button onClick={this.shareFacebook} className="btn btn-info">Chia sẻ</button>
                    <button onClick={this.replay} className="btn btn-secondary">Chơi lại</button>
                </div>
            </div>
        );
    }
});

module.exports = Result;