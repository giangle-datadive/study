let MovieItem = require('./MovieItem');

class MovieList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.movies.map((movie, index) => {
                    return <MovieItem key={index} movie={movie}/>
                })}
            </ul>
        )
    }
}

module.exports = MovieList;