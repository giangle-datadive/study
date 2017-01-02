let appStore = require('../stores/appStore');
let SearchForm = require('./SearchForm');
let MovieList = require('./MovieList');
let NoMovie = require('./NoMovie');

class App extends React.Component {

    constructor() {
        this.state = {
            movies: [],
            selected: '',
        }
    }

    getAppState() {
        let selected = appStore.getSelected();
        let movies = appStore.getMoviesResult();
        return {
            movies: movies,
            selected: selected,
        }
    }

    _onChange() {
        let state = this.getAppState();
        this.setState(state);
    }

    componentDidMount() {
        appStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        appStore.removeChangeListener(this._onChange.bind(this))
    }

    render() {
        let list;
        if (this.state.selected != '') {
            list = <NoMovie/>
            if (this.state.movies) {
                list = <MovieList movies={this.state.movies}/>;
            }
        }
        return (
            <div>
                <SearchForm/>
                {list}
            </div>
        )
    }
}

module.exports = App;