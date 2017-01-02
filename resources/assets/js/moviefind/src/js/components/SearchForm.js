let appActions = require('../actions/appActions');
let appStore = require('../stores/appStore');

class SearchForm extends React.Component {

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" ref="keyword" placeholder="Enter a keyword"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary">Search</button>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        let movie = {
            title: this.refs.keyword.value
        };
        appActions.searchMovie(movie);
    }
}

module.exports = SearchForm;